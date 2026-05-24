import express from "express";
import cors from "cors";
import serviceRoutes from "./routes/serviceRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/services", serviceRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Spa Wellness Center backend funcionando" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;
