import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic API route to demonstrate backend connectivity
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the server!" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
