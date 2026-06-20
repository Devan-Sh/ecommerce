# 🛍️ Forever - Full Stack E-Commerce Application

A full-stack e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), featuring a customer-facing storefront, a separate admin dashboard, and secure JWT-based authentication.

## 🚀 Live Demo

- **Storefront:** [Add your deployed frontend link]
- **Admin Panel:** [Add your deployed admin link]
- **Backend API:** [Add your deployed backend link]

## 📌 Features

### Customer Side
- Browse products with category and subcategory filters
- Search functionality
- Product details with size selection
- Shopping cart (persisted in database)
- Multiple payment options: **Cash on Delivery, Stripe, Razorpay**
- Order tracking and order history
- User authentication (Login / Register)

### Admin Side
- Separate admin dashboard with protected routes
- Add, list, and remove products with image upload
- View all customer orders
- Update order status (Order Placed → Packing → Shipped → Delivered)
- Image hosting via Cloudinary

## 🛠️ Tech Stack

**Frontend:** React.js, React Router, Context API, Tailwind CSS, Axios, React Toastify
**Backend:** Node.js, Express.js
**Database:** MongoDB with Mongoose ODM
**Authentication:** JWT (JSON Web Tokens), bcrypt for password hashing
**File Uploads:** Multer + Cloudinary
**Payments:** Stripe, Razorpay
**Deployment:** Vercel

## 📁 Project Structure

```
ecommerce-app/
├── backend/          # Express REST API
│   ├── config/       # DB and Cloudinary configuration
│   ├── controllers/  # Business logic
│   ├── middleware/   # JWT auth, admin auth, multer
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   └── server.js
├── frontend/         # Customer-facing React app
│   └── src/
│       ├── components/
│       ├── context/  # Global state (ShopContext)
│       └── pages/
└── admin/            # Admin dashboard React app
    └── src/
        ├── components/
        └── pages/
```

## 🔐 Authentication & Authorization

- JWT tokens are issued on login and stored client-side
- Custom Express middleware (`auth.js`) verifies tokens on protected routes
- Separate `adminAuth.js` middleware restricts admin-only routes (product management, order management)
- Passwords are hashed using bcrypt before being stored

## ⚙️ Running Locally

### Backend
```bash
cd backend
npm install
npm run server
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Admin
```bash
cd admin
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the `backend` folder with:

```
MONGODB_URL=
JWT_SECRET=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
CLOUDINARY_NAME=
ADMIN_EMAIL=
ADMIN_PASSWORD=
STRIPE_SECRET_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
PORT=4000
```

## 📚 Credits

Built by following [GreatStack](https://www.youtube.com/@GreatStackDev)'s full-stack MERN e-commerce tutorial as a learning project, with full understanding of the underlying architecture and implementation.

## 📄 License

This project is for educational and portfolio purposes.
