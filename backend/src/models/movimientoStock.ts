import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';
import { Producto } from './producto';

interface MovimientoAttributes {
  id: number;
  productoId: number;
  fecha: Date;
  stockInicial: number;
  stockFinal: number;
  vendido: number;
  importe: number;
}

interface MovimientoCreationAttributes extends Optional<MovimientoAttributes, 'id' | 'fecha' | 'vendido' | 'importe'> {}

export class MovimientoStock
  extends Model<MovimientoAttributes, MovimientoCreationAttributes>
  implements MovimientoAttributes
{
  public id!: number;
  public productoId!: number;
  public fecha!: Date;
  public stockInicial!: number;
  public stockFinal!: number;
  public vendido!: number;
  public importe!: number;
}

MovimientoStock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    stockInicial: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stockFinal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vendido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    importe: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    tableName: 'movimientos_stock',
    modelName: 'MovimientoStock'
  }
);

// Relaciones
Producto.hasMany(MovimientoStock, { foreignKey: 'productoId' });
MovimientoStock.belongsTo(Producto, { foreignKey: 'productoId' });
