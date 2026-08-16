# React Chapter 20 – Child to Parent Communication (Callback Functions) ⚛️🔄

This project covers **passing data from a child component to a parent component in React**, using callback functions passed down as props.

---

## 📌 About This Project

The example is split into `App.jsx` (parent) and `Navbar.jsx` (child), demonstrating:

* How a parent holds state and passes it down as props
* How a parent passes a **state-updater function** down as a prop
* How a child calls that function to trigger a state change in the parent
* How the updated state flows back down and re-renders the UI

The example uses a `theme` state, toggled from `'Light'` to `'Dark'` by a button click inside the child component.

---

## 🚀 What I Learned

* Why React data normally flows one way: parent → child
* How a child can still cause a parent's state to change, without breaking that one-way flow
* That the trick is passing a **function** as a prop, not passing state backward directly
* How `useState`'s setter function can itself be passed down as a prop
* How calling that setter from the child updates state that lives in the parent
* That this pattern is often called **"lifting state up"**
* How state changes in the parent automatically re-render the child with the new value

---

## 🧩 Concepts Covered

### 1️⃣ Parent Holds the State

```jsx
const [theme, setTheme] = useState('Light')
```

`App` owns the `theme` state. `Navbar` has no state of its own — it only receives what `App` gives it.

---

### 2️⃣ Passing State and Setter as Props

```jsx
<Navbar theme={theme} setTheme={setTheme} />
```

Both the current value (`theme`) and the function to change it (`setTheme`) are passed down together.

```text
App (parent)
  ↓ passes theme + setTheme as props
Navbar (child)
```

---

### 3️⃣ Child Calls the Parent's Function

```jsx
const changeTheme = () => {
  props.setTheme('Dark')
}
```

`Navbar` doesn't modify `theme` itself. It calls `props.setTheme`, which is really the parent's `setTheme` — the child is just triggering a function that belongs to the parent.

```text
Button clicked
      ↓
changeTheme() runs
      ↓
props.setTheme('Dark') called
      ↓
State updates inside App
```

---

### 4️⃣ State Flows Back Down

```text
setTheme('Dark') runs in App
      ↓
App re-renders
      ↓
theme is now 'Dark'
      ↓
New theme value passed down to Navbar as a prop
```

This is the "callback" part: the parent gave the child a function to call, and calling it is how the child communicates upward.

---

## 🖱️ State Change in the Example

```jsx
<button onClick={changeTheme}>Change Theme</button>
```

When clicked:

```text
Click
   ↓
changeTheme() → props.setTheme('Dark')
   ↓
theme state updates in App
   ↓
App re-renders
   ↓
<p>Theme is Dark</p>
```

---

## 📚 Key Pattern

| What                          | Where it lives | What it does                          |
|-------------------------------|-----------------|----------------------------------------|
| `theme` state                 | `App` (parent)  | Holds the current value                |
| `setTheme` function            | `App` (parent)  | Updates the state                      |
| `theme`, `setTheme` as props  | `Navbar` (child)| Received, not owned                    |
| `changeTheme()`                | `Navbar` (child)| Calls `props.setTheme` on click        |

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* React Hooks (`useState`)
* HTML5
* CSS3

---

## 🎯 Learning Outcome

After this project, I can:

* Explain how data normally flows in React (parent → child)
* Explain how a child can trigger a state change in its parent
* Pass a state-updater function down as a prop
* Call a parent's function from inside a child component
* Explain the term "lifting state up"
* Understand how state updates in a parent flow back down through props

## ⚠️ Note

Your folder was named `componenets` (typo) in the original import — rename to `components` for consistency with the conventional spelling.