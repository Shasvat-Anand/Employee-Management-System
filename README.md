
 # Employee Management System

A simple **Employee Management System** built with **React + Vite** that allows Admin and Employees to manage tasks efficiently.  
This project is fully frontend-based and uses **localStorage** for data persistence, so no backend server is required.

---

## 🚀 Features

### 👨‍💼 Admin
- Login with email and password
- Create new tasks
- Assign tasks to employees
- Track completion status of tasks/projects

### 👨‍💻 Employee
- Login with email and password
- Access personal dashboard
- View assigned tasks
- Update and track task progress

### ⚡ General
- Role-based login system (Admin / Employee)
- Persistent storage using **localStorage**
- Simple, lightweight, and easy-to-use UI

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite  
- **Styling:** CSS / Tailwind (if used)  
- **State Management:** React Hooks  
- **Storage:** LocalStorage  

---

## 📂 Project Structure

Employee-Management-System/


│── src/     # React components & logic

│── public/    # Static assets

│── index.html    # Entry point

│── package.json    # Project dependencies

│── vite.config.js     # Vite configuration

│── eslint.config.js    # ESLint configuration

│── README.md     # Documentation

yaml
Copy code

---

## 🏃 Getting Started

### 1. Clone the repository

git clone https://github.com/Shasvat-Anand/Employee-Management-System.git

cd Employee-Management-System

### 2. Install dependencies
npm install

### 3. Run the development server
 npm run dev


## ScreenShots

### Login page

![Login Page](public/loginpage.png)

## 🎯 Usage

Admin logs in with admin credentials → Access Admin Dashboard → Create & assign tasks.

Employee logs in with employee credentials → Access Employee Dashboard → View assigned tasks & track progress.

All changes are automatically saved in localStorage.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
