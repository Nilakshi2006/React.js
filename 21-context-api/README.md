# React Chapter 21 – Context API (Theme Switcher) ⚛️🌐

This project covers the **React Context API**, using it to share state (`theme`) across multiple nested components without passing props down manually at every level.

---

## 📌 About This Project

The example is split across several files, demonstrating:

* Creating a Context with `createContext()`
* Wrapping the app in a `Provider` to make state available everywhere
* Reading shared state from any component with `useContext`
* Updating context state from a deeply nested child
* Avoiding **prop drilling** — passing props through components that don't need them, just to reach one that does

`theme` state lives in `ThemeContext`, is read in `Navbar` and `Nav2`, and is updated from `Button` — none of them are direct parent/child of each other.

---

## 🚀 What I Learned

* What "prop drilling" is and why it becomes a problem in deeper component trees
* How Context solves this by letting any component subscribe to shared state directly
* How to create a context with `createContext()`
* How a `Provider` wraps components and supplies a `value` to all of them
* How `useContext` reads that value inside any nested component, no matter how deep
* That the `value` passed to a Provider can be anything — here, an array `[theme, setTheme]`, similar to what `useState` returns
* How updating state in one component (`Button`) reflects instantly in unrelated components (`Nav2`)
* How to apply the shared state as a dynamic class name (`className={theme}`) to change styling

---

## 🧩 Concepts Covered

### 1️⃣ Creating the Context

```jsx
export const ThemeDataContext = createContext()
```

This creates a Context object. On its own it holds no data — it's just a channel components can plug into.

---

### 2️⃣ Provider Holds and Supplies the State

```jsx
const ThemeContext = (props) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeDataContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  )
}
```

`ThemeContext` owns the actual state. Anything wrapped in `<ThemeDataContext.Provider>` can access `[theme, setTheme]` — the same pair `useState` would normally hand back.

---

### 3️⃣ Wrapping the App

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </StrictMode>,
)
```

`App` (and everything inside it) is wrapped in `ThemeContext`, so every descendant component can tap into the theme state — `Navbar`, `Nav2`, and `Button` included.

```text
ThemeContext (Provider)
      ↓
     App
    ↙    ↘
Navbar   Button
   ↓
  Nav2
```

---

### 4️⃣ Reading Context with `useContext`

```jsx
const [theme] = useContext(ThemeDataContext)
```

Used in `Navbar` and `Nav2` to read the current theme — no props passed in from a parent at all.

```jsx
<div className={theme}>
```

The value is used directly to set the CSS class (`light` or `dark`), switching the applied styles.

---

### 5️⃣ Updating Context from a Nested Component

```jsx
const [theme, setTheme] = useContext(ThemeDataContext)

const changeTheme = () => {
  setTheme('dark')
}
```

`Button` calls `setTheme` directly from context — it never received this function as a prop from a parent. It pulled it straight from the Provider.

```text
Button clicked
      ↓
setTheme('dark') called (from context)
      ↓
theme state updates inside ThemeContext
      ↓
Every component reading useContext(ThemeDataContext) re-renders
      ↓
Navbar's className updates → 'dark'
Nav2's {theme} text updates → 'dark'
```

---

## 🖱️ Data Flow Summary

```text
ThemeContext (Provider) — owns [theme, setTheme]
      │
      ├── Navbar → reads theme → sets className
      │      │
      │      └── Nav2 → reads theme → displays as text
      │
      └── Button → reads setTheme → updates theme on click
```

No props are passed between `Navbar`, `Nav2`, and `Button` — all three talk to the same context independently.

---

## 📚 Key Pattern

| What                          | Where it lives        | What it does                                 |
|-------------------------------|------------------------|-----------------------------------------------|
| `ThemeDataContext`             | `context/ThemeContext.jsx` | The channel components subscribe to      |
| `theme`, `setTheme`            | `ThemeContext` (Provider)  | Actual state and its updater              |
| `<ThemeDataContext.Provider>`  | Wraps `App` in `main.jsx`  | Makes state available to all descendants |
| `useContext(ThemeDataContext)` | `Navbar`, `Nav2`, `Button`  | Reads/updates state, no props needed     |

---

## 📁 Folder Structure

```
21-context-api/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Nav2.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
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
* React Hooks (`useState`, `useContext`, `createContext`)
* Vite
* HTML5
* CSS3

---

## 🎯 Learning Outcome

After this project, I can:

* Explain what prop drilling is and why Context avoids it
* Create a Context with `createContext()`
* Set up a Provider component that supplies shared state
* Wrap an app's component tree in a Provider
* Read shared state in any nested component with `useContext`
* Update shared state from a component that isn't a direct parent/child of the one displaying it
* Understand how one context update re-renders every component subscribed to it