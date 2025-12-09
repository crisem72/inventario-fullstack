import { Request, Response, NextFunction } from 'express';
import { RolUsuario } from '../models/usuario';

export const authorizeRoles = (...rolesPermitidos: RolUsuario[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const rol = req.user?.rol;

    if (!rol || !rolesPermitidos.includes(rol)) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }

    next();
  };
};
