# React Chapter 12 – Local Storage ⚛️💾

This chapter covers **using the browser's `localStorage` API in React** — storing, reading, and removing data, including strings, objects, and arrays.

---

## 📌 About This Chapter

One example is written in `App.jsx`, showing how to save a simple string to `localStorage`, then how to save and retrieve more complex data like objects and arrays by converting them to and from JSON.

---

## 🚀 What I Learned

* How to save a value with `localStorage.setItem(key, value)`
* How to read a value back with `localStorage.getItem(key)`
* How to delete a value with `localStorage.removeItem(key)`
* `localStorage` only stores strings — objects and arrays must be converted with `JSON.stringify()` before saving
* To get an object or array back in its original form, the stored string must be converted back with `JSON.parse()`
* `getItem()` must be called with the **key name** (a string), not the variable holding the data

---

## 🧩 Concepts Covered

### 1️⃣ Saving and Reading a Simple String
```jsx
localStorage.setItem('Name', 'Nilakshi')
const user = localStorage.getItem('Name')
console.log(user)
```
`setItem` writes the value under the given key, and `getItem` reads it back using that same key name.

### 2️⃣ Removing Data
```jsx
localStorage.removeItem('Name')
```
This deletes the key-value pair from storage entirely.

### 3️⃣ Storing Objects with `JSON.stringify`
```jsx
const Info = {
  Name: 'Nilakshi',
  Age: 20,
  Address: 'Punjab'
}
localStorage.setItem('Info', JSON.stringify(Info))
```
Since `localStorage` can only hold strings, the object is converted into a JSON string before saving.

### 4️⃣ Retrieving Objects with `JSON.parse`
```jsx
const information = JSON.parse(localStorage.getItem('Info'))
console.log(information)
```
The saved string has to be parsed back into an object to use it normally again.

### 5️⃣ Storing and Retrieving Arrays
```jsx
const arr = [1, 2, 3]
localStorage.setItem('arr', JSON.stringify(arr))

const arrData = JSON.parse(localStorage.getItem('arr'))
console.log(arrData)
```
Arrays follow the same pattern as objects — stringify to save, parse to read back.

---

## 🛠️ Technologies Used
* React.js · JavaScript (ES6+) · HTML5 · CSS3

---

## 🎯 Learning Outcome
After this chapter, I can:
* Explain why `localStorage` only works with strings
* Save and retrieve simple string values
* Save and retrieve objects and arrays using `JSON.stringify()` and `JSON.parse()`
* Remove data from `localStorage` when it's no longer needed