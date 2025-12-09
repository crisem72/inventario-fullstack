📘 Sistema de Gestión de Inventario – FullStack
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

Registrar nuevos usuarios empleados

Crear, editar y eliminar productos

Ver dashboard completo con:

Unidades vendidas

Gramos vendidos

Importe total

Movimientos del día

Gestionar el inventario completo

Empleado

Actualizar stock diario

Ver venta calculada automáticamente

No puede editar productos

📦 Funcionalidades Principales
✔ Gestión de Productos

Crear productos

Editarlos

Eliminarlos

Definir tipo de producto:

Por unidad

Por peso (gramos/kilos)

✔ Actualización Automática de Stock

Se ingresa el stock real del día

El sistema calcula:

unidades vendidas

gramos vendidos

kilos equivalente

importe total

✔ Movimientos Automáticos

Cada modificación de stock genera un registro con:

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

Importe total del día

Tabla con todos los movimientos

🏛 Arquitectura del Proyecto
inventario-fullstack/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── config/
│   │   ├── middleware/
│   │   └── migrations/
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── context/
    │   ├── services/
    │   └── hooks/
    └── package.json

🔐 Autenticación

Basada en:

JWT (JSON Web Token)

bcrypt para hash de contraseñas

Middleware de autenticación

Validación de roles

🗄 Endpoints Principales
Auth
Método	Ruta	Descripción
POST	/auth/register	Registrar admin o empleado
POST	/auth/login	Iniciar sesión
Productos
Método	Ruta	Descripción
GET	/productos	Listar productos
POST	/productos	Crear producto
PUT	/productos/:id	Editar producto
DELETE	/productos/:id	Eliminar producto
Stock
Método	Ruta	Descripción
PUT	/stock/:productoId	Actualizar stock diario
Movimientos
Método	Ruta	Descripción
GET	/movimientos/hoy	Movimientos del día
👤 Usuarios de Prueba
Administrador
Email: admin@inventario.com
Password: admin123

Empleado
Email: empleado@inventario.com
Password: empleado123


Podés ajustar estos usuarios según la BD que tengas cargada.

🔧 Instalación del Proyecto

Clonar el repositorio:

git clone https://github.com/crisem72/inventario-fullstack.git
cd inventario-fullstack

▶ Backend
cd backend
npm install


Crear archivo .env:

DB_HOST=127.0.0.1
DB_USER=postgres
DB_PASS=tu_password
DB_NAME=inventario_db
JWT_SECRET=secret123


Migraciones:

npx sequelize-cli db:migrate


Iniciar servidor:

npm run dev


Backend disponible en:

📌 http://localhost:4000

💻 Frontend
cd ../frontend
npm install
npm run dev


Abrir:

📌 http://localhost:5173

📊 Capturas Sugeridas

Agregá estas capturas al README si querés dejarlo TOP:

Pantalla de login

Panel del empleado

Modal de actualización de stock

Dashboard admin (totales y movimientos)

Tabla de productos

🏁 Conclusión

Este proyecto FullStack cumple con:

✔ React + Node + TypeScript
✔ PostgreSQL + Sequelize
✔ JWT + bcrypt
✔ Rol Admin y Empleado
✔ Productos por unidad y por peso
✔ Dashboard profesional
✔ Control de stock y movimientos
✔ Código prolijo y modularizado

Ideal para entrega académica o portfolio profesional.

👨‍💻 Autor

Proyecto desarrollado por Miño Cristhian Emanuel (Crisem).
Aplicación FullStack presentada como proyecto académico.