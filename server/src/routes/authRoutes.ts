// /src/routes/authRouter.ts

import { Router, type Request, type Response } from 'express';
import { getAuthUrl, getTokens } from '../config/connection.js';

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

import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};



// POST /login - Login a user
router.post('/login', login);

export default router;