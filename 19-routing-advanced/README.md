# React Chapter-19 - Advanced Routing 🧭🔗

A React app demonstrating advanced client-side routing with **React Router DOM**, featuring nested routes, dynamic route params, programmatic navigation, and a custom 404 page.

---

## 📌 About This Chapter

The app is built using `App.jsx` as the main component, which defines all routes, with `Navbar.jsx` for static links and `Navbar2.jsx` for programmatic navigation buttons.

* Sets up client-side routing using `react-router-dom`
* Defines page routes: Home, About, Courses, Course Detail, Product (with nested Men/Women routes)
* Uses `Navbar` (links) and `Navbar2` (buttons) rendered on every page
* Handles unmatched routes with a custom `NotFound` 404 page

---

## 🚀 Features

* **Nested routing** — `Product` route renders `Men`/`Women` as child routes via `Outlet`
* **Dynamic route params** — `CourseDetail` reads the course `id` from the URL with `useParams`
* **Programmatic navigation** — `Navbar2` uses `useNavigate` to go home, back, or forward
* **Catch-all 404 page** — wildcard route (`*`) renders a styled `NotFound` page
* **Persistent layout** — `Navbar`, `Navbar2`, and `Footer` stay visible across all routes

---

## 🧩 Concepts Used

### 1️⃣ Setting Up Routes

```jsx
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
  <Route path='/courses' element={<Courses />} />
  <Route path='/courses/:id' element={<CourseDetail/>}/>
</Routes>
```

`Routes` and `Route` map each URL path to the component that should render there. The `*` path acts as a catch-all for any unmatched URL.

### 2️⃣ Dynamic Params with `useParams`

```jsx
const CourseDetail = () => {
  const param = useParams();
  return <h1>{param.id} Course Detail</h1>
}
```

`useParams` reads the dynamic segment (`:id`) from the URL, letting one component render different content per course.

### 3️⃣ Programmatic Navigation with `useNavigate`

```jsx
const Navigate = useNavigate();

<button onClick={() => Navigate('/')}>Return to Home page</button>
<button onClick={() => Navigate(-1)}>Return to prev page</button>
<button onClick={() => Navigate(+1)}>Return to next page</button>
```

`useNavigate` moves between routes from inside event handlers — `-1`/`+1` move through browser history like back/forward buttons.

### 4️⃣ Nested Routing with `Outlet`

```jsx
<Route path='/product' element={<Product/>}>
  <Route path='men' element={<Men/>}/>
  <Route path='women' element={<Women/>}/>
</Route>
```

```jsx
const Product = () => {
  return (
    <div>
      <Link to='/product/men'>Men</Link>
      <Link to='/product/women'>Women</Link>
      <Outlet/>
    </div>
  )
}
```

`Outlet` renders the matched child route inside the parent (`Product`), so `Men`/`Women` share the parent's layout instead of replacing the whole page.

### 5️⃣ Custom 404 Page

```jsx
<Route path='*' element={<NotFound />} />
```

The `NotFound` component renders a styled error page with an animated eyes illustration and a link back home.

---

## 📁 Folder Structure

```text
19-routing-advanced/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Navbar2.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── Courses.jsx
│   │   ├── Home.jsx
│   │   ├── Men.jsx
│   │   ├── NotFound.css
│   │   ├── NotFound.jsx
│   │   ├── Product.jsx
│   │   └── Women.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* React.js
* React Router DOM
* JavaScript (ES6+)
* Tailwind CSS
* Vite

---

## 🎨 Credits

The animated 404 page design (eyes illustration) is adapted from a CodePen
---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## 🎯 Learning Outcome

Building this project helped reinforce:

* Setting up a catch-all 404 route with `react-router-dom`
* Reading dynamic URL segments with `useParams`
* Navigating programmatically with `useNavigate`
* Implementing nested routes with `Outlet`
* Building a persistent, multi-navbar layout across routes