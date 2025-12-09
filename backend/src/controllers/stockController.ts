import { Request, Response } from 'express';
import { Producto } from '../models/producto';
import { MovimientoStock } from '../models/movimientoStock';

export const actualizarStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;          
    const { nuevoStock } = req.body;    

    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    const stockReal = Number(nuevoStock);
    if (isNaN(stockReal) || stockReal < 0) {
      return res.status(400).json({ message: 'Stock inválido' });
    }

    // stock antes de actualizar
    const stockInicial = producto.stockActual;
    const stockFinal = stockReal;

    // Diferencia de stock (unidades o gramos)
    const vendido = stockInicial - stockFinal;

    if (vendido < 0) {
      return res
        .status(400)
        .json({ message: 'El stock real no puede ser mayor que el stock actual.' });
    }

    // Cálculo de importe
    let importe = 0;
    let vendidoKg: number | null = null;

    if (producto.esPorPeso) {
      // Interpretamos 'vendido' como GRAMOS
      vendidoKg = vendido / 1000;          
      importe = vendidoKg * producto.precio; 
    } else {
      // Producto por unidad
      importe = vendido * producto.precio;
    }

    // Actualizar el producto
    producto.stockActual = stockFinal;
    await producto.save();

    // Registrar movimiento 
    await MovimientoStock.create({
      productoId: producto.id,
      fecha: new Date(),
      stockInicial,
      stockFinal,
      vendido,   
      importe
    });

    return res.json({
      message: 'Stock actualizado correctamente',
      data: {
        producto: producto.nombre,
        esPorPeso: producto.esPorPeso,
        vendido,        
        vendidoKg,      
        importe
      }
    });
  } catch (error) {
    console.error('Error al actualizar stock:', error);
    return res.status(500).json({ message: 'Error al actualizar stock' });
  }
};

