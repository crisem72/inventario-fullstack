import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface ProductoAttributes {
  id: number;
  nombre: string;
  precio: number;
  stockInicial: number;
  stockActual: number;
  esPorPeso: boolean; 
}

interface ProductoCreationAttributes
  extends Optional<ProductoAttributes, 'id' | 'stockInicial' | 'stockActual' | 'esPorPeso'> {} 

export class Producto
  extends Model<ProductoAttributes, ProductoCreationAttributes>
  implements ProductoAttributes
{
  public id!: number;
  public nombre!: string;
  public precio!: number;
  public stockInicial!: number;
  public stockActual!: number;
  public esPorPeso!: boolean; 
}

Producto.init(
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
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stockInicial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stockActual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    esPorPeso: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false 
    }
  },
  {
    sequelize,
    tableName: 'productos',
    modelName: 'Producto'
  }
);
