import { Router } from 'express';
import { actualizarStock } from '../controllers/stockController';
import { authMiddleware } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';

const router = Router();

// Solo empleados y admin pueden modificar stock
router.post(
  '/actualizar/:idProducto',
  authMiddleware,
  authorizeRoles('admin', 'empleado'),
  actualizarStock
);

export default router;
