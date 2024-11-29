import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

// Map the routes
mapRoutes(app);

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
