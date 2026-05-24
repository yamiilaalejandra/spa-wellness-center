import prisma from "../config/db.js";

export const getAllServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: { name: "asc" },
    });
    res.json(services);
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    res.status(500).json({ error: "No se pudieron obtener los servicios" });
  }
};

export const createService = async (req, res) => {
  const { name, durationMinutes, price } = req.body;

  if (!name || durationMinutes == null || price == null) {
    return res.status(400).json({
      error: "name, durationMinutes y price son obligatorios",
    });
  }

  try {
    const service = await prisma.service.create({
      data: {
        name,
        durationMinutes: Number(durationMinutes),
        price: Number(price),
      },
    });

    res.status(201).json(service);
  } catch (error) {
    console.error("Error al crear servicio:", error);
    res.status(500).json({ error: "No se pudo crear el servicio" });
  }
};
