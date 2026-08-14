# React Chapter-18 - React Router Dom 🧭🔗

A React app demonstrating client-side routing with **React Router DOM**, featuring multiple pages and a shared navigation bar.

---

## 📌 About This Chapter

The app is built using `App.jsx` as the main component, which defines all routes, and a shared `Navbar.jsx` component for navigation across pages.

* Sets up client-side routing using `react-router-dom`
* Defines multiple page routes: Home, About, Contact, and Products
* Uses a persistent `Navbar` component rendered on every page
* Uses `Link` components for navigation without full page reloads

---

## 🚀 Features

* **Multi-page routing** — separate routes for Home, About, Contact, and Products
* **Persistent navigation** — `Navbar` stays visible across all routes
* **Client-side navigation** — `Link` components swap pages without a browser refresh
* **Clean component structure** — each page is its own component under `pages/`

---

## 🧩 Concepts Used

### 1️⃣ Setting Up Routes

```jsx
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/products' element={<Products/>}/>
</Routes>
```

`Routes` and `Route` map each URL path to the component that should render there.

### 2️⃣ Navigation with `Link`

```jsx
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
<Link to='/products'>Product</Link>
```

`Link` behaves like an anchor tag but updates the page without a full reload, keeping the app fast and SPA-like.

### 3️⃣ Shared Layout

```jsx
<div>
  <Navbar/>
  <Routes>
    ...
  </Routes>
</div>
```

`Navbar` sits outside `Routes`, so it renders on every page regardless of the active route.

---

## 📁 Folder Structure

```text
18-react-router-dom/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Products.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🛠️ Technologies Used

* React.js
* React Router DOM
* JavaScript (ES6+)
* Vite

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## 🎯 Learning Outcome

Building this project helped reinforce:

* Setting up routing in a React app with `react-router-dom`
* Structuring an app into route-driven page components
* Building a shared, persistent navigation component
* Navigating between pages without full browser reloads</file_text>