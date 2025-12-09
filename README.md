📘 README – Sistema de Gestión de Inventario FullStack
🧩 Sistema de Gestión de Inventario para Comercios Locales

Proyecto Final – Aplicación Web FullStack (Frontend + Backend)
Incluye autenticación, roles, gestión de stock, control de ventas por unidad y por peso, dashboard administrativo y registro automático de movimientos.

🚀 Tecnologías Utilizadas
Frontend

React.js

TypeScript

Bootstrap 5

Axios

Protected Routes + Context de autenticación

Backend

Node.js + Express

TypeScript

PostgreSQL

Sequelize ORM

JWT + bcrypt

Arquitectura MVC

Base de Datos

PostgreSQL

Modelo relacional con migraciones

Tablas principales:

usuarios

productos

movimientos_stock

🎯 Objetivo del Proyecto

Desarrollar un sistema de inventario simple, rápido y seguro que permita:

✔ Registrar productos
✔ Actualizar stock diariamente
✔ Calcular ventas automáticamente
✔ Registrar movimientos de stock
✔ Manejar usuarios con roles (admin / empleado)
✔ Diferenciar ventas por unidad o por peso (gramos/kilos)
✔ Mostrar un dashboard diario con totales e importe generado

👥 Roles del Sistema
Administrador

Puede registrar nuevos usuarios empleados.

Puede crear, editar y eliminar productos.

Puede ver el dashboard completo con:

ventas por unidad

ventas por gramos

importe total generado

lista de movimientos del día

Puede cargar productos nuevos.

Empleado

Solo puede actualizar stock diario.

El sistema calcula automáticamente la venta del día.

No puede modificar productos.

📦 Funcionalidades Principales
✔ Gestión de Productos

Crear productos

Editar productos

Eliminar productos

Definir si un producto es:

Por unidad

Por peso (gramos)

✔ Actualización de Stock Diario

Se ingresa el stock real del final del día.

El sistema calcula automáticamente:

cantidad vendida

gramos vendidos (si corresponde)

importe generado

✔ Movimientos Automáticos

Cada actualización genera un registro en movimientos_stock que incluye:

Producto

Stock inicial

Stock final

Vendido (unidad o gramos)

Importe

Fecha y hora exacta

✔ Dashboard del Administrador

Incluye:

Cantidad total de movimientos del día

Total de unidades vendidas

Total de gramos vendidos

Importe total

Tabla con todos los movimientos del día

🏛 Arquitectura del Proyecto
backend/
│ src/
│ ├─ controllers/
│ ├─ routes/
│ ├─ models/
│ ├─ config/
│ ├─ middleware/
│ └─ migrations/
frontend/
│ src/
│ ├─ pages/
│ ├─ components/
│ ├─ context/
│ ├─ services/
│ ├─ hooks/


Patrón utilizado: MVC + separación de capas

🔐 Autenticación

Sistema basado en:

JWT (JSON Web Token)

bcrypt para hash de contraseñas

Middleware de autenticación que protege rutas

Roles incorporados en el payload del token

🗄 Endpoints Principales (Resumen)
Auth
Método	Ruta	Descripción
POST	/auth/register	Crear usuario admin/empleado
POST	/auth/login	Iniciar sesión y obtener token
Productos
Método	Ruta	Descripción
GET	/productos	Listar productos
POST	/productos	Crear producto
PUT	/productos/:id	Editar producto
DELETE	/productos/:id	Eliminar producto
Stock
Método	Ruta	Descripción
PUT	/stock/:productoId	Actualizar stock del día
Movimientos
Método	Ruta	Descripción
GET	/movimientos/hoy	Movimientos del día
🔧 Instalación del Proyecto

Clonar el repositorio:

git clone https://github.com/tu_usuario/inventario-fullstack.git
cd inventario-fullstack

▶ Backend
cd backend
npm install


Configurar .env:

DB_HOST=127.0.0.1
DB_USER=postgres
DB_PASS=tu_password
DB_NAME=inventario_db
JWT_SECRET=secret123


Crear tablas:

npx sequelize-cli db:migrate


Iniciar:

npm run dev

💻 Frontend
cd frontend
npm install
npm run dev


Acceder a:

👉 http://localhost:5173

👉 Backend corre en http://localhost:4000


Proyecto académico — Miño Cristhian Emanuel.