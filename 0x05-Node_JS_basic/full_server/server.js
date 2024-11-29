import express from 'express';
import router from './routes';

const app = express();
const PORT = 1245;

// Use the defined routes
router(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

export default app;
module.exports = app;
