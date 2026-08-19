# ReactJS Learning Journey

This repository contains my hands-on React learning journey, built as a sequence of small Vite projects. Each folder focuses on a specific React concept and includes a working example or mini project.

## Learning Progression

### 1. React Foundations

| Folder | Main topics |
| --- | --- |
| [01-folder](./01-folder) | React and Vite setup, project structure, JSX, functional components, imports and exports, global CSS |
| [02-components](./02-components) | Reusable components, component organization, component-level styling |
| [03-Props](./03-Props) | Passing data from parent to child with props, dynamic and reusable components |
| [04-cards-project](./04-cards-project) | List rendering with `map()`, arrays of objects, the `key` prop, reusable job cards, Lucide icons |

### 2. Styling and UI Composition

| Folder | Main topics |
| --- | --- |
| [05-CSS](./05-CSS) | CSS Modules, scoped styles, `.module.css` files, component-specific styling |
| [06-Tailwind-CSS](./06-Tailwind-CSS) | Tailwind CSS v4, Vite plugin setup, utility classes, responsive styling |
| [07-UI-Project](./07-UI-Project) | A responsive target-audience segmentation UI, feature-based components, dynamic cards, Tailwind CSS, Remix Icons |

### 3. Interaction, State, and Forms

| Folder | Main topics |
| --- | --- |
| [08-Functions](./08-Functions) | Event handlers, function arguments, click, mouse, input, wheel events, synthetic events |
| [09-useState](./09-useState) | `useState` with strings, numbers, and arrays; counter state updates |
| [10-useState-Advance](./10-useState-Advance) | Immutable object and array updates, spread syntax, functional updaters, batched state updates |
| [11-form-handling](./11-form-handling) | Form submission, `onSubmit`, `event.preventDefault()`, custom submit handlers |
| [12-two-way-binding](./12-two-way-binding) | Controlled inputs, `value` plus `onChange`, state-to-input synchronization, resetting forms |
| [13-notes-app](./13-notes-app) | A notes app built incrementally: UI, adding notes, controlled inputs, and deleting notes |

### 4. Browser Storage and External Data

| Folder | Main topics |
| --- | --- |
| [14-localStorage](./14-localStorage) | `setItem`, `getItem`, `removeItem`, `JSON.stringify()`, and `JSON.parse()` |
| [15-API-Calling](./15-API-Calling) | `fetch()` and Axios, async data loading, response parsing, storing API data in state, rendering results |
| [16-useEffect](./16-useEffect) | Effects after every render, mount-only effects, dependency arrays, updates, and multiple effects |
| [17-gallery-project](./17-gallery-project) | Picsum image gallery, Axios, `useEffect`, loading state, reusable cards, pagination, conditional rendering |

### 5. Routing and Shared State

| Folder | Main topics |
| --- | --- |
| [18-react-router-dom](./18-react-router-dom) | Client-side routing, route components, `Link`, shared navigation, SPA navigation |
| [19-routing-advanced](./19-routing-advanced) | Nested routes, `Outlet`, dynamic parameters with `useParams`, `useNavigate`, persistent layouts, custom 404 pages |
| [20-bonus-topic](./20-bonus-topic) | Child-to-parent communication, callback props, lifting state up, parent-owned state |
| [21-context-api](./21-context-api) | `createContext`, providers, `useContext`, shared theme state, avoiding prop drilling |

## Skills I Have Practiced

- Creating React applications with Vite.
- Writing JSX and functional components.
- Designing reusable component hierarchies.
- Passing data down with props and passing callbacks up to parents.
- Rendering arrays dynamically with `map()` and stable keys.
- Styling with regular CSS, CSS Modules, and Tailwind CSS v4.
- Handling browser events and React synthetic events.
- Managing primitive, object, and array state with `useState`.
- Updating state immutably and avoiding stale state with functional updaters.
- Building controlled forms and synchronizing inputs with state.
- Creating interactive mini projects such as cards, a notes app, and an image gallery.
- Persisting data in browser `localStorage`.
- Calling external APIs with both `fetch()` and Axios.
- Running side effects with `useEffect` and dependency arrays.
- Building client-side navigation with React Router DOM.
- Using dynamic routes, nested routes, programmatic navigation, and fallback pages.
- Sharing state across deeply nested components with Context API.

## Common Technology Stack

- React.js
- Vite
- JavaScript (ES6+)
- HTML5 and CSS3
- Tailwind CSS v4
- Axios
- React Router DOM
- Lucide React and Remix Icons

## Running a Chapter

Each numbered folder is an independent Vite project. Open a folder in a terminal and run:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, usually `http://localhost:5173`.

## Suggested Review Path

1. Revisit components, props, and list rendering in chapters 1–4.
2. Compare CSS Modules and Tailwind CSS in chapters 5–7.
3. Practice events, state, immutable updates, and forms in chapters 8–13.
4. Rebuild the gallery from chapters 14–17 with loading and error states.
5. Extend the routing examples in chapters 18–19 with protected or shared layouts.
6. Compare callback props in chapter 20 with Context API in chapter 21.

## Repository Structure

```text
REACTJS/
├── 01-folder/ ... 21-context-api/
├── app.js
├── index.html
├── script.js
└── README.md
```

The individual chapter READMEs contain the detailed explanations, code examples, project screenshots, and implementation notes for each topic.