import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

export type RolUsuario = 'admin' | 'empleado' | 'user';

interface UsuarioAttributes {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rol: RolUsuario;
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id' | 'rol'> {}

export class Usuario
  extends Model<UsuarioAttributes, UsuarioCreationAttributes>
  implements UsuarioAttributes
{
  public id!: number;
  public nombre!: string;
  public email!: string;
  public password!: string;
  public rol!: RolUsuario;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.ENUM('admin', 'empleado', 'user'),
      allowNull: false,
      defaultValue: 'empleado'
    }
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: true
  }
);
