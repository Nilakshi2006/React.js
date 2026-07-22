# React Chapter 5 – CSS Modules ⚛️

This chapter focuses on styling React components using **CSS Modules**. Instead of using global CSS files, I learned how to create component-specific styles that prevent class name conflicts and keep the project organized.

## 📌 About This Chapter

In this chapter, I built a simple interface consisting of a **Header** and a **Button** component. Each component has its own dedicated CSS Module file, demonstrating how styles remain scoped to individual components.

## 🚀 What I Learned

* Understanding what CSS Modules are
* Creating `.module.css` files
* Importing CSS Modules into React components
* Applying scoped styles using the imported `styles` object
* Preventing CSS class name conflicts
* Organizing component-specific styling
* Building reusable and maintainable React components
* Structuring components with their own styling files

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS Modules

## 📂 Folder Structure

```text
src/
├── assets/
│
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   │
│   └── Header/
│       ├── Header.jsx
│       └── Header.module.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎯 Learning Outcome

After completing this chapter, I can:

* Create and use CSS Modules in React.
* Import component-specific styles using `.module.css`.
* Apply styles using the `styles.className` syntax.
* Avoid global CSS conflicts.
* Organize styling in a scalable and maintainable way.
* Build reusable React components with isolated styles.