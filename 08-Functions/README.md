# React Chapter 8 – Functions & Event Handling in React ⚛️🖱️

This chapter focuses on understanding **functions and event handling in React**. I learned how to create functions, call them through different React events, pass values as arguments, retrieve user input, and handle browser events using event objects.

---

## 📌 About This Chapter

In this chapter, I explored how React handles user interactions through **event handlers**. I practiced attaching functions to different events such as button clicks, mouse movements, text input changes, and mouse wheel scrolling. I also learned how to pass data to functions and retrieve values from event objects.

---

## 🚀 What I Learned

* Creating functions inside React components
* Calling functions using React event handlers
* Passing values (arguments) to functions
* Receiving and using function parameters
* Retrieving user input using the event object
* Handling button click events
* Handling mouse enter events
* Handling input field change events
* Handling mouse wheel (scroll) events
* Understanding React's synthetic event object
* Using `event.target.value` to read input values
* Using `event.deltaY` to detect scroll direction

---

## 🧩 Concepts Covered

### 1️⃣ Button Click Event

A function is executed when the button is clicked.

```jsx
function btnclicked() {
  console.log("Button is Clicked");
}

<button onClick={btnclicked}>
  Change User
</button>
```

---

### 2️⃣ Passing Values to Functions

Functions can receive parameters just like normal JavaScript functions.

```jsx
const TextChanged = (val) => {
  console.log(val);
};
```

The value is passed from the input field.

```jsx
<input
  onChange={(event) => {
    TextChanged(event.target.value);
  }}
/>
```

---

### 3️⃣ Retrieving User Input

The event object provides access to the current value entered by the user.

```jsx
event.target.value
```

Example:

```jsx
<input
  type="text"
  placeholder="Enter Name"
  onChange={(event) => {
    console.log(event.target.value);
  }}
/>
```

---

### 4️⃣ Mouse Enter Event

A function is triggered whenever the mouse pointer enters an element.

```jsx
<button
  onMouseEnter={() => {
    console.log("Mouse is Entered");
  }}
>
  Click Me
</button>
```

---

### 5️⃣ Mouse Wheel (Scroll) Event

The scroll direction is detected using `event.deltaY`.

```jsx
const scroll = (elem) => {
  if (elem > 0) {
    console.log("Page Scrolling from upwards to downwards at speed", elem);
  } else {
    console.log("Page Scrolling from downward to upward at speed", elem);
  }
};
```

```jsx
<div
  onWheel={(event) => {
    scroll(event.deltaY);
  }}
>
  ...
</div>
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

* Create reusable functions inside React components.
* Attach functions to React event handlers.
* Call functions when user interactions occur.
* Pass arguments to functions.
* Retrieve user input using `event.target.value`.
* Handle button click, mouse enter, input change, and scroll events.
* Understand and use React's event object effectively.
* Build interactive React applications using event-driven programming.