import { Router } from 'express';
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productoController';
import { authMiddleware } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';

const router = Router();

// Ver productos: cualquier usuario logueado
router.get('/', authMiddleware, obtenerProductos);
router.get('/:id', authMiddleware, obtenerProductoPorId);

// Crear / editar / eliminar: solo admin
router.post('/', authMiddleware, authorizeRoles('admin'), crearProducto);
router.put('/:id', authMiddleware, authorizeRoles('admin'), actualizarProducto);
router.delete('/:id', authMiddleware, authorizeRoles('admin'), eliminarProducto);

export default router;
