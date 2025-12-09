import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB, sequelize } from './config/db';


// IMPORTAR RUTAS
import authRoutes from './routes/authRoutes';
import productoRoutes from './routes/productoRoutes';
import stockRoutes from './routes/stockRoutes'; 
import movimientoRoutes from './routes/movimientoRoutes';

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/stock', stockRoutes); 
app.use('/api/movimientos', movimientoRoutes);

// Ruta de prueba
app.get('/', (_req, res) => {
  res.send('API Inventario funcionando');
});

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

start();
