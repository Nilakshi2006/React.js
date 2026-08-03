# React Chapter 11 – Form Handling ⚛️📝

This chapter covers **basic form handling in React** — controlling the default submit behavior and hooking form submission into custom JavaScript logic.

---

## 📌 About This Chapter

One example is written in `App.jsx`, showing a simple form with a text input and submit button, wired up to a custom submit handler.

---

## 🚀 What I Learned

* By default, submitting an HTML form causes the whole page to reload
* How to prevent this default browser behavior using `event.preventDefault()`
* How to attach a custom submit handler to a form via the `onSubmit` prop
* Passing the event object (`e`) from the inline handler into a separate function so that function can call `e.preventDefault()`

---

## 🧩 Concepts Covered

### 1️⃣ Preventing Default Form Submission
```jsx
const submit = (e) => {
  e.preventDefault();
  console.log("Form in Submitted")
}

return (
  <div>
    <form onSubmit={(e) => {
      submit(e)
    }}>
      <input type="text" placeholder='Enter your Name'></input>
      <button>Submit</button>
    </form>
  </div>
)
```
Without `e.preventDefault()`, clicking **Submit** reloads the page and the console log never persists. Calling it inside the `submit` function stops the reload so the form's own logic runs instead.

---

## 🛠️ Technologies Used
* React.js · JavaScript (ES6+) · HTML5 · CSS3

---

## 🎯 Learning Outcome
After this chapter, I can:
* Explain why forms reload the page by default
* Prevent that default behavior with `e.preventDefault()`
* Wire a form's `onSubmit` to a custom handler function