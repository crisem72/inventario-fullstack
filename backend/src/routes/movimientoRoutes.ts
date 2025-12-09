import { Router } from 'express';
import { getMovimientosHoy } from '../controllers/movimientoController';
import { authMiddleware } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';

const router = Router();


router.get(
  '/hoy',
  authMiddleware,
  authorizeRoles('admin', 'empleado'),
  getMovimientosHoy
);

export default router;
