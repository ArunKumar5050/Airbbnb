
# 🏡 Airbnb Clone

A full-stack clone of Airbnb built using the **MERN stack** (MongoDB, Express, React, Node.js). This project allows users to sign up, log in, explore listings core features of the original Airbnb platform.

---

## 📸 Preview

![Airbnb Clone Screenshot](./screenshot.png)

---
![image](https://github.com/user-attachments/assets/a6aa30b0-394a-4fd4-ba50-ee33a39b24da)


![image](https://github.com/user-attachments/assets/47b1bee6-cf0a-41d2-a383-bde5a353bddf)


![image](https://github.com/user-attachments/assets/892afdf2-6d6d-408a-89f1-1d0270dcb3e5)

   

## 🚀 Features

- 🧑‍💼 User Authentication (Login / Signup / Logout)
- 🏠 View Listings with Images and Details
- ✍️ Add or Host a Listing (Authenticated Users Only)
- 📅 Responsive Search Bar UI (Anywhere | Any week | Add guests)
- 🖼️ Airbnb-style image gallery and layout
- 🌐 Dynamic Navbar (changes on login/logout)
- 🧭 Protected Routes using JWT
- 🧹 Airbnb-style filters and categories UI
- 🔐 Token-based auth using JWT stored in localStorage

---

## 🧱 Tech Stack

**Frontend:**

- React
- React Router DOM
- Tailwind CSS
- Axios
- React Icons

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs
- jsonwebtoken
- dotenv
- cors

---

## 📂 Project Structure

```
airbnb-clone/
│
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/axios.js
│   │   └── App.jsx
│
├── server/            # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── .env
```

---

## ⚙️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
JWT_SECRET=your_jwt_secret
PORT=8080
```

Start the server:

```bash
npm start
```

### 3. Set up the frontend

```bash
cd ../client
npm install
npm run dev
```

Now visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Upcoming Features

- Booking calendar
- Date selection filters
- Payment integration (Stripe)
- Google Maps integration for locations

---

## 🙌 Contributing

PRs are welcome. Please open issues first to discuss major changes.

---

## 📄 License

This project is licensed under the MIT License.
