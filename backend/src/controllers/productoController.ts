import { Request, Response } from 'express';
import { Producto } from '../models/producto';

export const crearProducto = async (req: Request, res: Response) => {
  try {
    const { nombre, precio, stockInicial, esPorPeso } = req.body; // 👈 ahora sí lo tomamos del body

    const stockIni = stockInicial ?? 0;

    const producto = await Producto.create({
      nombre,
      precio,
      stockInicial: stockIni,
      stockActual: stockIni,
      esPorPeso: !!esPorPeso 
    });

    return res.status(201).json(producto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    return res.status(500).json({ message: 'Error al crear producto' });
  }
};


// Listar todos los productos
export const obtenerProductos = async (_req: Request, res: Response) => {
  try {
    const productos = await Producto.findAll();
    return res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return res.status(500).json({ message: 'Error al obtener productos' });
  }
};

// Obtener un producto por id
export const obtenerProductoPorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    return res.json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    return res.status(500).json({ message: 'Error al obtener producto' });
  }
};

// Actualizar producto (solo admin)
export const actualizarProducto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, precio, stockInicial } = req.body;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    if (nombre) {
      producto.nombre = nombre;
    }

    if (precio !== undefined) {
      if (precio <= 0) {
        return res.status(400).json({ message: 'El precio debe ser mayor a 0' });
      }
      producto.precio = precio;
    }

    
    if (stockInicial !== undefined) {
      const nuevoStockIni = Number(stockInicial);
      if (isNaN(nuevoStockIni) || nuevoStockIni < 0) {
        return res.status(400).json({ message: 'Stock inicial inválido' });
      }
      producto.stockInicial = nuevoStockIni;
    }

    await producto.save();

    return res.json(producto);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return res.status(500).json({ message: 'Error al actualizar producto' });
  }
};

// Eliminar producto (solo admin)
export const eliminarProducto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await producto.destroy();

    return res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return res.status(500).json({ message: 'Error al eliminar producto' });
  }
};
