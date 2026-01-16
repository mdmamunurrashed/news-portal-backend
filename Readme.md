# News Portal with Backend

A full-featured news portal built with **HTML**, **JavaScript**, **Express JS Server**, **JWT Authentication** and **MongoDB** Database, allowing users to create, read, update, and delete news articles with comments.

---

## ✨ Features

- ✅ RESTful API for news management
- ✅ Create, edit, and delete news articles
- ✅ Add comments to news posts
- ✅ Author-based authorization (only authors can edit/delete their posts)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - [npm Documentation](https://docs.npmjs.com/)
- **MongoDB** (cloud) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** (optional, for cloning)

### Verify Installation

```bash
node --version    # Should show v14.0.0 or higher
npm --version     # Should show 6.0.0 or higher
```

---

## 🚀 Installation

### Step 1: Clone or Navigate to the Project

```bash
# If cloning from repository
git clone https://github.com/mdmamunurrashed/news-portal-backend.git
cd news-portal-backend

# Or navigate to existing project
cd news-portal-backend
```

### Step 2: Navigate to Backend Directory

```bash
cd backend
```

### Step 3: Install Dependencies

```bash
npm install
```
```bash
npm install express jsonwebtoken bcrypt
```

### Step 3: Configure Database

```bash
1. Create .env file
2. Enter PORT=(Enter Your Port Number Here)
3. Enter MONGODB_URI=(MongoDB URL including Username & Password)
4. Enter JWT_SECRET=(Jason Web Token)
NB: Check .end_example file.
```

## ▶️ Running the Project

### Step 1: 

```bash
npm run seed
```
**Expected Output:**
```
✅ MongoDB Connected Successfully
```

### Step 2: 

```bash
npm run dev
```
**Expected Output:**
```
🚀 Server is running on http://localhost:3000
```

### Step 3: 

```bash
cd ..
```

```bash
index.html
```


## 📁 Project Structure

```
news-portal-backend/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── News.js
│   │   └── User.js
│   ├── routes/
│   │   ├── news.js
│   │   └── users.js
│   ├── node_modules/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── seed.js
│   └── server.js
├── create-news.html
├── edit-news.html
├── index.html
├── news-detail.html
├── news-list.html
└── Readme.md
```

---

## 🧪 Testing the API

### Using Postman

1. Download [Postman](https://www.postman.com/downloads/)
2. Create a new request
3. Set URL to `http://localhost:3000`
4. Select method (GET, POST, etc.)
5. Send request

### Using Frontend

Open any of the HTML files in your browser:
- `index.html` - Home page
- `news-list.html` - View all news
- `create-news.html` - Create new article
- `edit-news.html` - Edit article
- `news-detail.html` - View article details
---
