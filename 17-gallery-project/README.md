# React Chapter-17 - Gallery Project 🖼️🎨

A React app that fetches and displays a paginated image gallery using the **Picsum Photos API**, styled with **Tailwind CSS**.

---

## 📌 About This Project

The app is built using `App.jsx` as the main component and a reusable `Card.jsx` component to render each image.

* Fetches image data from the Picsum Photos API using `axios`
* Displays images in a responsive, wrapping grid layout
* Supports pagination with **Next** and **Prev** buttons
* Shows a loading state while data is being fetched
* Uses `useEffect` to refetch data whenever the page index changes

---

## 🖼️ Preview

<!-- Add a screenshot of the app here -->
![App Preview](./src/assets/Gallery%20Project.jpeg)

---

## 🚀 Features

* **Dynamic image fetching** — pulls a fresh set of images for each page from the Picsum API
* **Pagination controls** — `Next` and `Prev` buttons update the page index and trigger a new fetch
* **Disabled state styling** — the `Prev` button dims when on page 1
* **Loading indicator** — shows a "Loading......." message while images are being fetched
* **Clickable cards** — each image links out to its original Picsum source page

---

## 🧩 Concepts Used

### 1️⃣ Fetching Data with `useEffect`

```jsx
useEffect(function () {
  getData()
}, [index])
```

The effect runs on mount and again every time `index` changes, so a new page of images loads automatically.

### 2️⃣ Conditional Rendering

```jsx
let printUserData = <h3>Loading.......</h3>
if (userData.length > 0) {
  printUserData = userData.map(function (elem, idx) {
    return (
      <div key={idx}>
        <Card elem={elem} />
      </div>
    )
  })
}
```

Shows a loading message until the API data arrives, then maps over the results.

### 3️⃣ Pagination State

```jsx
const [index, setIndex] = useState(1)
```

`index` tracks the current page and is passed into the API request URL.

---

## 📁 Folder Structure

```text
17-gallery-project/
├── component/
│   └── Card.jsx
├── node_modules/
├── public/
├── src/
│   ├── assets/
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
* JavaScript (ES6+)
* Axios
* Tailwind CSS
* Vite
* Picsum Photos API

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## 🎯 Learning Outcome

Building this project helped reinforce:

* Fetching external API data with `axios` inside `useEffect`
* Re-running effects based on a dependency (`index`)
* Building reusable components (`Card.jsx`) driven by props
* Managing pagination state with `useState`
* Conditional rendering based on data-loading state