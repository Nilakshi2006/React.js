# React Chapter 15 – Fetching APIs (fetch vs Axios) ⚛️🌐

This chapter covers **fetching data from external APIs in React**, comparing the native `fetch()` method with the `axios` library, and rendering the fetched data in the UI.

---

## 📌 About This Chapter

One example is written in `App.jsx`, showing three stages: fetching data with the built-in `fetch()` API, fetching the same kind of data with `axios`, and finally fetching real data from an API and displaying it on screen using `useState`.

---

## 🚀 What I Learned

* How to fetch data with the native `fetch()` API and convert the response with `.json()`
* Why `fetch()` needs an extra `await response.json()` step, since the raw response is a stream, not the data itself
* How to fetch data with `axios`, where the response is ready to use directly (no manual parsing step)
* How to destructure `data` straight out of the `axios` response: `const { data } = await axios.get(url)`
* How to store fetched data in state with `useState` and render it with `.map()`
* That an API call should be triggered by an event (like a button click), not run directly in the component body
* What JSONPlaceholder and Lorem Picsum are, and how they're used as free fake/test APIs

---

## 🧩 Concepts Covered

### 1️⃣ Fetching Data with `fetch()`
```jsx
const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log(response)          // shows a pending Promise-like Response object
  const data = await response.json()   // must also be awaited
  console.log(data)
}
```
`fetch()` only gives back a raw **Response** object first. It has to be unwrapped a second time with `response.json()` (also async) to get the actual data.

### 2️⃣ Fetching Data with Axios
```jsx
import axios from 'axios'

const getData = async () => {
  // Normal
  // const response = await axios.get('https://jsonplaceholder.typicode.com/users')

  // Destructured
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(data)
}
```
Unlike `fetch()`, axios resolves directly to usable data inside `response.data` — no second parsing step needed. Destructuring `{ data }` pulls it out in one line.

### 3️⃣ Fetching and Displaying Data in the UI
```jsx
const [data, setData] = useState([])   // starts as an empty array

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list')
  console.log(response)
  setData(response.data)
}

return (
  <div>
    <button onClick={getData}>Get Data</button>
    <div>
      {data.map(function (elem, idx) {
        return <h3>{idx} {elem.author}</h3>
      })}
    </div>
  </div>
)
```
The API call runs only when the button is clicked, not on every render. The response is saved into state with `setData`, and React re-renders the list automatically. `.map()` loops over the array and prints the index plus each photo's `author`.

---

## 🌍 APIs Used

### JSONPlaceholder
A free fake REST API used for testing and prototyping. It gives ready-made endpoints like `/users`, `/posts`, and `/comments` that return realistic dummy JSON data, so there's no need to build a backend just to practice fetching.
👉 https://jsonplaceholder.typicode.com

### Lorem Picsum
A free image placeholder service. Besides serving random images directly, its `/v2/list` endpoint returns JSON metadata for each photo (like `id`, `author`, and image URLs), making it useful for practicing API calls that return lists of objects.
👉 https://picsum.photos

---

## 🛠️ Technologies Used
* React.js · JavaScript (ES6+) · Axios · Fetch API · HTML5 · CSS3

---

## 🎯 Learning Outcome
After this chapter, I can:
* Explain the difference between `fetch()` and `axios` when calling an API
* Correctly unwrap a `fetch()` response with `.json()`
* Destructure data directly from an `axios` response
* Store API data in state and render it dynamically in the UI
* Trigger API calls from user events instead of on component render
* Use JSONPlaceholder and Lorem Picsum as sources for practice API data