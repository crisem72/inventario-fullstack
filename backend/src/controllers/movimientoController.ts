import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { MovimientoStock } from '../models/movimientoStock';
import { Producto } from '../models/producto';

export const getMovimientosHoy = async (_req: Request, res: Response) => {
  try {
    const inicio = new Date();
    inicio.setHours(0, 0, 0, 0);

    const fin = new Date(inicio);
    fin.setDate(fin.getDate() + 1); 

    const movimientos = await MovimientoStock.findAll({
      where: {
        fecha: {
          [Op.gte]: inicio,
          [Op.lt]: fin
        }
      },
      include: [
        {
          model: Producto,
          attributes: ['id', 'nombre', 'precio', 'esPorPeso'] 
        }
      ],
      order: [['fecha', 'ASC']]
    });

    const totalMovimientos = movimientos.length;

    // Total general (para compatibilidad, mezcla unidades y gramos)
    const totalVendido = movimientos.reduce((acc, m: any) => acc + m.vendido, 0);
    const totalImporte = movimientos.reduce((acc, m: any) => acc + m.importe, 0);

    // Totales separados
    const totalUnidades = movimientos
      .filter((m: any) => !m.Producto?.esPorPeso)
      .reduce((acc, m: any) => acc + m.vendido, 0);

    const totalGramos = movimientos
      .filter((m: any) => m.Producto?.esPorPeso)
      .reduce((acc, m: any) => acc + m.vendido, 0);

    return res.json({
      fecha: inicio.toISOString().substring(0, 10),
      resumen: {
        totalMovimientos,
        totalVendido,   
        totalImporte,
        totalUnidades,  // unidades (tortas, etc.)
        totalGramos     // gramos (helados)
      },
      movimientos
    });
  } catch (error) {
    console.error('Error al obtener movimientos de hoy:', error);
    return res.status(500).json({ message: 'Error al obtener movimientos de hoy' });
  }
};
