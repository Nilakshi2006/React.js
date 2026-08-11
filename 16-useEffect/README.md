# React Chapter 16 – useEffect Hook ⚛️🔄

This chapter covers the **`useEffect` Hook in React**, understanding component mounting, dependency arrays, and how effects run when specific state values change.

---

## 📌 About This Chapter

The example is written in `App.jsx`, demonstrating different ways to use the `useEffect` Hook:

* Running an effect after every render
* Running an effect only when the component mounts
* Running an effect when a specific state value changes
* Using multiple `useEffect` Hooks for different state variables

The final example uses two states, `a` and `b`, to understand how `useEffect` responds independently when each state changes.

---

## 🚀 What I Learned

* What `useEffect` is and why it is used in React
* What **mounting** means in React
* How `useEffect` behaves without a dependency array
* How an empty dependency array `[]` makes an effect run only once after mounting
* How to provide dependencies to `useEffect`
* How an effect runs again when one of its dependencies changes
* How state changes cause a component to re-render
* That re-rendering is an **update**, not mounting
* How to use multiple `useEffect` Hooks in the same component
* How each `useEffect` can independently monitor a different state variable

---

## 🧩 Concepts Covered

### 1️⃣ `useEffect` Without a Dependency Array

```jsx
const [num, setNum] = useState(0)

useEffect(function () {
  console.log("useEffect is running")
})
```

When there is **no dependency array**, the effect runs after **every render**.

For example, when the `num` state changes:

```jsx
setNum(num + 1)
```

React re-renders the component, and the `useEffect` runs again.

**Flow:**

```text
Initial Render
      ↓
useEffect runs
      ↓
State changes
      ↓
Component re-renders
      ↓
useEffect runs again
```

---

### 2️⃣ `useEffect` With an Empty Dependency Array

```jsx
const [num, setNum] = useState(0)

useEffect(function () {
  console.log("useEffect is running")
}, [])
```

An empty dependency array means the effect runs **once after the component mounts**.

```text
Component Mounts
      ↓
useEffect runs
      ↓
No more executions
```

Even if the state changes later, this effect does not run again because it has no dependencies.

---

### 3️⃣ `useEffect` With a Dependency

```jsx
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(100)

useEffect(function () {
  console.log("useEffect is running")
}, [num1])
```

Here, `num1` is added to the dependency array.

The effect runs:

* After the initial render
* Whenever `num1` changes

It **does not run when only `num2` changes**.

```text
num1 changes → useEffect runs ✅
num2 changes → useEffect doesn't run ❌
```

---

### 4️⃣ Using Multiple `useEffect` Hooks

The final example demonstrates how different effects can monitor different state variables.

```jsx
const [a, setA] = useState(0)
const [b, setB] = useState(0)

const aChanging = () => {
  console.log("Value of A changed")
}

const bChanging = () => {
  console.log("Value of B changed")
}

useEffect(function () {
  aChanging()
}, [a])

useEffect(function () {
  bChanging()
}, [b])
```

Here:

* The first `useEffect` depends on `a`
* The second `useEffect` depends on `b`

Therefore:

```text
Increase A
   ↓
a changes
   ↓
First useEffect runs
   ↓
"Value of A changed"


Decrease B
   ↓
b changes
   ↓
Second useEffect runs
   ↓
"Value of B changed"
```

This shows that each `useEffect` can have its **own dependency array** and can respond to different state changes independently.

---

## 🖱️ State Changes in the Example

### Increase A

```jsx
<button onClick={() => {
  setA(a + 1)
}}>
  Increase A
</button>
```

When the button is clicked:

```text
a changes
   ↓
Component re-renders
   ↓
[a] dependency changed
   ↓
First useEffect runs
```

---

### Decrease B

```jsx
<button onClick={() => {
  setB(b - 1)
}}>
  Decrease B
</button>
```

When the button is clicked:

```text
b changes
   ↓
Component re-renders
   ↓
[b] dependency changed
   ↓
Second useEffect runs
```

---

## 📚 Important `useEffect` Patterns

| `useEffect` Syntax            | When It Runs            |
| ------------------------------ | ------------------------ |
| `useEffect(() => {})`         | After every render      |
| `useEffect(() => {}, [])`     | Once after mounting     |
| `useEffect(() => {}, [a])`    | When `a` changes        |
| `useEffect(() => {}, [a, b])` | When `a` or `b` changes |

---

## 🔄 Mounting vs Updating

### Mounting

Mounting happens when a component is rendered and added to the DOM **for the first time**.

```jsx
useEffect(() => {
  console.log("Mounted")
}, [])
```

### Updating

Updating happens when the component's **state or props change**, causing it to re-render.

```jsx
useEffect(() => {
  console.log("A changed")
}, [a])
```

When `a` changes, the component updates and the effect runs.

> **Important:** When `useEffect` runs again because a state changed, this is an **update**, not a new mounting.

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* React Hooks
* `useState`
* `useEffect`
* HTML5
* CSS3

---

## 🎯 Learning Outcome

After this chapter, I can:

* Explain what the `useEffect` Hook is
* Explain mounting in React
* Explain the difference between mounting and updating
* Use `useEffect` without a dependency array
* Use `useEffect` with an empty dependency array
* Use dependencies to control when an effect runs
* Understand how state changes trigger re-renders
* Use multiple `useEffect` Hooks in one component
* Explain why an effect runs when a specific dependency changes
* Understand the relationship between `useState`, re-rendering, and `useEffect`