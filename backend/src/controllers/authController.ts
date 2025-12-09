import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { Usuario } from '../models/usuario';
import { JwtPayloadData } from '../types/jwtPayload';

// Valores base para JWT
const JWT_SECRET = process.env.JWT_SECRET || 'cambia_esto_en_produccion';
const JWT_EXPIRES = (process.env.JWT_EXPIRES || '1d') as SignOptions['expiresIn'];

export const register = async (req: Request, res: Response) => {
  try {
    const { nombre, email, password, rol } = req.body;

    const existe = await Usuario.findOne({ where: { email } });
    if (existe) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const nuevo = await Usuario.create({
      nombre,
      email,
      password: hashed,
      rol: rol || 'empleado'
    });

    return res.status(201).json({
      id: nuevo.id,
      nombre: nuevo.nombre,
      email: nuevo.email,
      rol: nuevo.rol
    });
  } catch (error) {
    console.error('Error en register:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const esValida = await bcrypt.compare(password, usuario.password);
    if (!esValida) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Payload tipado
    const payload: JwtPayloadData = {
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol
    };

    // Opciones tipadas
    const options: SignOptions = {
      expiresIn: JWT_EXPIRES
    };

    const token = jwt.sign(payload, JWT_SECRET, options);

    return res.json({
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};
