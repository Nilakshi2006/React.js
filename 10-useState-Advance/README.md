# React Chapter 10 – useState Hook ⚛️🔄 (Part 2)

This chapter continues the **useState hook in React** — updating object and array state immutably, and understanding React's batch update behavior.

---

## 📌 About This Chapter

Three examples are written in `App.jsx`. Only one is active (uncommented) at a time so it can be demoed on its own; the others are kept commented out as reference. **Currently active: Example 5 – Batch Update.**

---

## 🚀 What I Learned

* Updating object state immutably using the spread operator
* Updating object state using the functional updater form
* Updating array state immutably using the spread operator
* How React batches multiple `setState` calls in one event handler into a single re-render
* Why the functional updater form (`prev => ...`) is needed so each batched update builds on the latest state instead of a stale value

---

## 🧩 Concepts Covered

### 3️⃣ Destructuring-Object State *(commented / reference)*
```jsx
const [user, setUser] = useState({
  name: "Nilakshi",
  age: 20,
});

function btnClicked() {
  // Create a copy of the object using the spread operator
  const newUser = { ...user };
  // Update values
  newUser.name = "abc";
  newUser.age = 29;
  // Update state
  setUser(newUser);
}

// Functional updater alternative:
const btnClicked = () => {
  setUser(prev => ({ ...prev, age: 50 }))
}
```

### 4️⃣ Destructuring-Array State *(commented / reference)*
```jsx
const [num, setNum] = useState([10, 20, 30]);

function btnClicked() {
  // Create copy of array using spread operator
  const newNum = [...num];
  // Update values
  newNum[0] = 100;
  newNum[1] = 200;
  newNum[2] = 300;
  // Update state
  setNum(newNum);
}
```

### 5️⃣ Batch Update *(active)*
```jsx
const [num, setNum] = useState(10)

const btnClicked = () => {
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
}
```
Clicking the button fires `setNum` three times inside one event handler. React batches these into a **single re-render**. Because each call uses the functional form `prev => prev + 1`, every call reads the latest pending value — so `num` correctly ends up **+3** per click instead of +1.

---

## 🛠️ Technologies Used
* React.js · JavaScript (ES6+) · HTML5 · CSS3

---

## 🎯 Learning Outcome
After this chapter, I can:
* Update object state immutably via the spread operator and via the functional updater form
* Update array state immutably via the spread operator
* Explain and predict React's batch update behavior
* Use the functional updater form to avoid stale-closure bugs when multiple state updates happen together