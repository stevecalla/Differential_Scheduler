import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Use the calendarRouter for routes starting with '/calendar'
app.use(routes);

// Your server's listening port
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

