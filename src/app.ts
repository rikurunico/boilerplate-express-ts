import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes"; // Update import to match your file structure

// Create Express server
const app = express();
const port = process.env.PORT || 3000; // Use environment variable if available

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan("dev")); // Enable Morgan
app.use(express.json()); // Middleware for parsing JSON
app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded data

// Route handler
app.use("/users", userRoutes); // Use the userRoutes for '/users' path

// Error handler for 404
app.use((req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(`Terjadi kesalahan pada server! ${err.message}`);
});

// Start Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;
