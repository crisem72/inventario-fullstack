import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';
import { authorizeRoles } from '../middleware/roleMiddleware';

const router = Router();

//solo admin puede registrar nuevos usuarios
router.post('/register',
  authMiddleware,
  authorizeRoles('admin'),
  register
);

// Login público
router.post('/login', login);

export default router;
