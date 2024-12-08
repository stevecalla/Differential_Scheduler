// /src/routes/authRouter.ts

import { Router, Request, Response } from 'express';
import { getAuthUrl, getTokens } from '../config/connection.js';
import { Login } from '../models/login.js';  // Import the User model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing
const router = Router();

// Route to redirect users to Google authentication page
router.get('/', (_req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

// Callback route to handle Google's redirect with the authorization code
router.get('/callback', async (req, res) => {
  const { code } = req.query; // Get the authorization code from query
  if (typeof code === 'string') {
    try {
      const tokens = await getTokens(code);
      console.log('Tokens:', tokens);
      res.redirect('/api/calendar/events'); // Redirect after successful authentication
    } catch (error) {
      console.error('Error during authentication:', error);
      res.status(500).send('Error during authentication');
    }
  } else {
    res.status(400).send('Authorization code missing');
  }
});




// Login function to authenticate a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;  // Extract username and password from request body

  // Find the user in the database by username
  const user = await Login.findOne({
    where: { username },
  });

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });  // Send the token as a JSON response
};

// POST /login - Login a user
router.post('/login', login);  // Define the login route

export default router;
