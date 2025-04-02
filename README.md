# 📝 Note App Frontend

This is the frontend client for the Note App, built with **React** and **React Bootstrap**.  
It allows users to manage personal notes with status tracking (To Do, In Progress, Done), and connects to a Django REST API backend.

---

## 🚀 Features

- Responsive UI using React Bootstrap
- Token-based authentication
- Create, view, update, and delete notes
- Notes organized by status
- Modal form for note input
- Axios for API requests
- Auto-filtered note list by logged-in user

---

## 🛠 Tech Stack

- React (via Create React App)
- Axios
- React Bootstrap
- LocalStorage for auth token

---

## 📦 Installation

### 1. Clone the repo
```bash
git clone [https://github.com/your-username/note-app-frontend.git](https://github.com/goonle/cicd_frontend.git)
cd note-app-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

By default, it runs at [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentication

1. The login form sends a request to the Django backend:
   ```
   POST /api-token-auth/
   ```

2. On success, it stores the returned token in `localStorage`.

3. All future API requests include this header:
   ```
   Authorization: Token <your_token>
   ```

---

## 📋 API Dependency

This app depends on the [Note App Backend](https://github.com/goonle/cicd_backend).  
You must start the backend server at:

```
http://localhost:8000
```

You can configure the backend URL in:

```
/src/constants/server.js
```

```js
const SERVER_URL = "http://localhost:8000";
export default SERVER_URL;
```

---

## 🧪 Running Tests

If you're writing component tests:

```bash
npm test
```

---

## 📁 Folder Structure

```
frontend/
├── .github/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── LoadingPanel.js
│   │   ├── LogoutBtn.js
│   │   ├── LogoutBtn.test.js
│   │   ├── NoteItem.js
│   │   ├── NoteItem.test.js
│   │   ├── NoteList.js
│   │   ├── NoteList.test.js
│   │   ├── NoteModal.js
│   │   ├── NoteModal.test.js
│   │   ├── OpenModalBtn.js
│   ├── constants/
│   │   └── server.js
│   ├── routers/
│   │   ├── Home.js
│   │   ├── LoginPage.js
│   │   ├── LoginPage.test.js
│   │   ├── NoteListPage.js
│   │   └── PrivateRoute.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── ...
```

---

## 🔄 Environment Variables (Optional)

Create a `.env` file for API customization:

```
REACT_APP_API_BASE=http://localhost:8000
```

Use it like:

```js
const SERVER_URL = process.env.REACT_APP_API_BASE;
```

---

## 📌 Future Enhancements

- User login / registration UI
- Drag-and-drop Kanban style board
- Persistent login
- Tag or label system for notes

---

## 🤝 Contributing

Pull requests are welcome!  
Feel free to fork and improve the project.

---

## 📄 License

This project is licensed under the MIT License.
