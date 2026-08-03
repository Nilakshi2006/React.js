# React Chapter 12 – Two-Way Binding ⚛️🔁

This chapter continues **form handling in React** — using two-way data binding to keep a controlled input in sync with state.

---

## 📌 About This Chapter

One example is written in `App.jsx`, showing a controlled text input bound to state via `value` and `onChange`, submitted through a custom handler.

---

## 🚀 What I Learned

* How to set up **two-way binding** on an input using `value` + `onChange`
* How the input and state stay in sync in both directions as the user types
* How to reset an input field by resetting its bound state
* Combining two-way binding with `e.preventDefault()` to handle submission without a page reload

---

## 🧩 Concepts Covered

### Two-Way Binding
```jsx
const [title, setTitle] = useState('')

const submit = (e) => {
  e.preventDefault();
  setTitle('')
  console.log("Form Submitted by", title)
}

return (
  <div>
    <form onSubmit={(e) => {
      submit(e)
    }}>
      <input type="text"
        placeholder='Enter your Name'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  </div>
)
```

#### 🔁 Flow of Two-Way Binding in This Code

1. `title` state starts as an empty string, and the input's `value` is bound to `title` — so the input always displays whatever `title` currently holds.
2. User types a character → the input fires its `onChange` event.
3. `onChange` calls `setTitle(e.target.value)`, updating `title` to the input's current text.
4. React re-renders `App` with the new `title` value, which flows back into the input's `value` prop — the input visually updates to show what was typed.
5. Steps 2–4 repeat on every keystroke, keeping the input and the `title` state permanently in sync in **both directions**: state → input (via `value`) and input → state (via `onChange`). This is what makes it "two-way."
6. On submit, `e.preventDefault()` stops the page reload, the current `title` is logged, and `setTitle('')` resets both the state and (because of the binding) the visible input back to empty.

---

## 🛠️ Technologies Used
* React.js · JavaScript (ES6+) · HTML5 · CSS3

---

## 🎯 Learning Outcome
After this chapter, I can:
* Implement two-way binding on a controlled input using `value` and `onChange`
* Explain the full data flow of two-way binding, from keystroke to state update to re-render
* Reset a controlled input by resetting its bound state