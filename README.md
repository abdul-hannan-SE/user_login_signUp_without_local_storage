# 🔐 User Authentication System (Login & Sign Up)

A simple **user authentication system** built with **Node.js, Express, MongoDB, and JWT** that allows users to **register and login securely without relying on local storage**. This project demonstrates secure backend authentication workflows with modern web technologies.

---

## 🚀 Features

* 🔑 **User Sign Up** with validation (unique email & password encryption).
* 🔓 **User Login** with JWT authentication.
* 🛡️ **Secure authentication** without storing sensitive tokens in local storage.
* 📦 **MongoDB + Mongoose** for database management.
* ⚡ **Express.js** for handling API routes.
* 🎯 **Scalable structure** for integrating into larger applications.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose)
* **Authentication**: JWT (JSON Web Token), bcrypt for password hashing
* **Other Tools**: Postman (for testing)

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdul-hannan-SE/user_login_signUp_without_local_storage.git
cd user_login_signUp_without_local_storage
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run the server

```bash
npm start
```

Server will be running at: `http://localhost:5000`

---

## 📌 API Endpoints

### 🔑 Register User

```http
POST /api/auth/register
```

**Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### 🔓 Login User

```http
POST /api/auth/login
```

**Body (JSON):**

```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Response returns a **JWT token**.

---

## 🤝 Contributing

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 👤 Author

**Abdul Hannan**

* GitHub: [@abdul-hannan-SE](https://github.com/abdul-hannan-SE)
* Email: [contact.hannan1000@gmail.com](mailto:contact.hannan1000@gmail.com)
