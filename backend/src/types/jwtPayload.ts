export interface JwtPayloadData {
  id: number;
  email: string;
  rol: 'admin' | 'empleado' | 'user';
}
