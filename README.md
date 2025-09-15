📌 Taskify — To-Do App (Server)

Taskify is a simple task manager where users can register, log in, and manage their tasks with categories.
This is the backend (server) built with Node.js, Express, and MongoDB.

🚀 Features

User authentication (JWT-based)

Create, read, update, and delete tasks

Categorize tasks (e.g., work, personal)

Secure routes (each user can only access their own tasks)

🛠️ Tech Stack

Backend: Node.js, Express

Database: MongoDB + Mongoose

Auth: JWT (JSON Web Tokens)

Password Security: bcrypt

📂 API Endpoints
Auth

POST /auth/register → Register a new user

POST /auth/login → Login and receive JWT

Tasks (requires Authorization: Bearer <token>)

GET /tasks → Get all tasks for logged-in user

GET /tasks?category=work → Filter tasks by category

POST /tasks → Create a task

PATCH /tasks/:id → Update a task

DELETE /tasks/:id → Delete a task
