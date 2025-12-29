# News Portal with Backend

A full-featured news portal built with **HTML**, **JavaScript**, **Express JS** Server and **MoongoDB** Database, allowing users to create, read, update, and delete news articles with comments.

---

## Features

-  RESTful API for news management
-  Create, edit, and delete news articles
-  Add comments to news posts
-  Author-based authorization (only authors can edit/delete their posts)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - [npm Documentation](https://docs.npmjs.com/)
- **MongoDB** (cloud) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** (optional, for cloning)

## Installation

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
### Step 3: Configure Database

```bash
1. Create .env file
2. Enter PORT=(Port Number)
3. Enter MONGODB_URI=(URL including Username & Password)
NB: Check .end_example file for more info.
```

## Running the Project

### Step 1: 

```bash
npm run seed
```
**Expected Output:**
```
MongoDB Connected Successfully
```

### Step 2: 

```bash
npm run dev
```
**Expected Output:**
```
Server is running on http://localhost:3000
```

### Step 3: 

```bash
cd news-portal-backend
```

```bash
index.html
```


## Project Structure

```
news-portal-backend/
├── backend/
│   ├── models/
│   │   ├── News.js          # News schema definition
│   │   └── User.js          # User schema definition
│   ├── routes/
│   │   ├── news.js          # News API routes
│   │   └── users.js         # User API routes
│   ├── package.json         # Project dependencies
│   ├── server.js            # Main server file
│   ├── seed.js              # Database seeding script
│   └── .env                 # Environment variables (Create This One)
├── create-news.html         # News creation frontend
├── edit-news.html           # News editing frontend
├── index.html               # Home page
├── news-detail.html         # News detail page
├── news-list.html           # News listing page
└── Readme.md                # This file
```

---

## Testing the API

### Using cURL

```bash
# Get all news
curl http://localhost:3000/news

# Get all users
curl http://localhost:3000/users

# Welcome message
curl http://localhost:3000/
```

### Using Postman

1. Download [Postman](https://www.postman.com/downloads/)
2. Create a new request
3. Set URL to `http://localhost:3000/news`
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
