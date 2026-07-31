# React Chapter 9 – useState Hook ⚛️🔄

This chapter focuses on understanding the **useState hook in React**. I learned how to create and update state with strings, numbers, and arrays, how to update objects and arrays immutably, and how React batches multiple state updates together.

---

## 📌 About This Chapter

In this chapter, I explored React's `useState` hook and the different ways state can be declared and updated. I practiced updating simple values, updating objects and arrays without mutating them directly, and understanding how React batches state updates when multiple `setState` calls happen in a row.

---

## 🚀 What I Learned

* Declaring state with `useState` for strings, numbers, and arrays
* Updating state with a new value
* Updating objects in state using the spread operator
* Updating objects in state using the functional updater form
* Updating arrays in state using the spread operator
* Understanding why arrays are not recommended as direct state values
* Understanding React's batch update behavior
* Using the functional updater form (`prev => ...`) to update state reliably

---

## 🧩 Concepts Covered

### 1️⃣ Basics – String, Number & Array State

Simple values are declared using `useState`.

```jsx
const [name, newName] = useState('Nilakshi')
const [age, newAge] = useState(20)

// For array (not recommended)
const [color, setcolor] = useState(['Green ', 'Yellow ', 'Pink '])
```

State is updated by calling the setter function with a new value.

```jsx
function chnageInfo() {
  newName('Navdeep')
  newAge(19)
  setcolor(['White ', 'Black ', 'Brown '])
}
```

---

### 2️⃣ Counter Mini Project

A simple counter demonstrates increasing and decreasing state by fixed amounts.

```jsx
const [num, newNum] = useState(0);

function increase() {
  newNum(num + 1);
}
function decrease() {
  newNum(num - 1);
}
function increaseByFive() {
  newNum(num + 5);
}
function decreaseByFive() {
  newNum(num - 5);
}
```

---

### 3️⃣ Updating Object State

Objects in state should never be mutated directly. A copy is made using the spread operator, updated, then passed back to the setter.

```jsx
const [user, setUser] = useState({
  name: "Nilakshi",
  age: 20,
});

function btnClicked() {
  const newUser = { ...user };
  newUser.name = "abc";
  newUser.age = 29;
  setUser(newUser);
}
```

The same update can also be done using the functional updater form.

```jsx
const btnClicked = () => {
  setUser(prev => ({ ...prev, age: 50 }))
}
```

---

### 4️⃣ Updating Array State

Arrays follow the same rule — copy first, then update.

```jsx
const [num, setNum] = useState([10, 20, 30]);

function btnClicked() {
  const newNum = [...num];
  newNum[0] = 100;
  newNum[1] = 200;
  newNum[2] = 300;
  setNum(newNum);
}
```

---

### 5️⃣ Batch Update

React batches multiple `setState` calls made in the same event handler into a single re-render. Using the functional updater form ensures each update builds on the latest state.

```jsx
const [num, setNum] = useState(10)

const btnClicked = () => {
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
}
```

---

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📂 Folder Structure

```text
src/
├── assets/
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

public/
package.json
vite.config.js
README.md
```

---

## 🎯 Learning Outcome

After completing this chapter, I can:

* Declare state for strings, numbers, objects, and arrays using `useState`.
* Update object state immutably using the spread operator.
* Update object state using the functional updater form.
* Update array state immutably without direct mutation.
* Explain why arrays are not the recommended way to hold state directly.
* Understand and predict React's batch update behavior.
* Use the functional updater form to reliably update state based on its previous value.