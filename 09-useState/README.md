# React Chapter 9 – useState Hook ⚛️🔄

This chapter covers the basics of the **useState hook in React** — declaring state for strings, numbers, and arrays, and updating state with a Counter mini project.

---

## 📌 About This Chapter

Two examples are written in `App.jsx`. Only one is active (uncommented) at a time so it can be demoed on its own; the other is kept commented out as reference. **Currently active: Example 2 – Counter Mini Project.**

---

## 🚀 What I Learned

* Declaring state with `useState` for strings, numbers, and arrays
* Updating state by calling the setter with a new value
* Building a simple counter that increments/decrements state by fixed amounts

---

## 🧩 Concepts Covered

### 1️⃣ Basics – String, Number & Array State *(commented / reference)*
```jsx
const [name, newName] = useState('Nilakshi')
const [age, newAge] = useState(20)

// For array (not recommended)
const [color, setcolor] = useState(['Green ', 'Yellow ', 'Pink '])

function chnageInfo() {
  newName('Navdeep')
  newAge(19)
  setcolor(['White ', 'Black ', 'Brown '])
}
```

### 2️⃣ Counter Mini Project *(active)*
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
Four buttons call these handlers to increase/decrease `num` by 1 or by 5, rendered live in the JSX below `<h2>{num}</h2>`.

---

## 🛠️ Technologies Used
* React.js · Vite · JavaScript (ES6+) · HTML5 · CSS3

---

## 📂 Folder Structure
```text
src/
├── assets/
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
After this chapter, I can:
* Declare state for strings, numbers, and arrays using `useState`
* Update state with a new value via the setter function
* Build a basic counter that adjusts state by fixed increments

---

## 🔜 Coming Up
Object/array destructuring updates and batch update behavior are planned for a later section — not yet implemented in this file.