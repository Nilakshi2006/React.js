# React Chapter 6 – Installing Tailwind CSS with Vite ⚛️🎨

This chapter focuses on integrating **Tailwind CSS** into a React project created with **Vite**. I learned how to install Tailwind CSS, configure Vite, and start styling React components using Tailwind's utility classes.

## 📌 About This Chapter

In this chapter, I set up **Tailwind CSS v4** in a React + Vite project by installing the required packages, configuring the Vite plugin, importing Tailwind into the global stylesheet, and applying utility classes to build my first Tailwind-powered component.

## 🚀 What I Learned

* Installing Tailwind CSS in a Vite React project
* Configuring the Tailwind Vite plugin
* Importing Tailwind into the global CSS file
* Understanding Tailwind utility classes
* Styling React components without writing custom CSS
* Using responsive and reusable utility classes
* Setting up a modern CSS workflow with Tailwind

## 🛠️ Installation

### 1️⃣ Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

### 2️⃣ Configure Vite

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 3️⃣ Import Tailwind

Inside **src/index.css**

```css
@import "tailwindcss";
```

### 4️⃣ Start Using Tailwind

Example:

```jsx
const App = () => {
  return (
    <div className="h-screen w-full bg-gray-600">

    </div>
  )
}

export default App
```

## 🛠️ Technologies Used

* React.js
* Vite
* Tailwind CSS v4
* JavaScript (ES6+)
* HTML5

## 📂 Folder Structure

```text
src/
├── assets/
│
├── App.jsx
├── index.css
└── main.jsx

vite.config.js
package.json
```

## 🎯 Learning Outcome

After completing this chapter, I can:

* Install Tailwind CSS in a React + Vite project.
* Configure the Tailwind Vite plugin.
* Import Tailwind into the project's global stylesheet.
* Apply Tailwind utility classes to React components.
* Build responsive user interfaces without writing traditional CSS.
* Set up a modern styling workflow using Tailwind CSS.