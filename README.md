# React User Profile Project

This project is a simple React app built with **Vite** that demonstrates how to work with **components, props, and lists** in React.  
It displays user details and their favorite foods using reusable components.

---

## 🚀 Getting Started

### 1. Run this project
```bash
npm install
npm run dev
```

### 2. When creating a new project
```bash
npm create vite@latest
- React
npm run dev
```
- Remove all boilerplate files.
- Keep only main.jsx.
- Recreate the App component as a functional component.

### 3. Project Structure
```markdown
src/
 ├── components/
 │    ├── UserProfile.jsx
 │    ├── UserDetails.jsx
 │    └── UserFavoriteFoods.jsx
 │    └── UserDetails.jsx
 ├── css/
 └── globals.css
├── App.jsx
└── main.jsx
```

### 4. Components
A component is always a function that returns JSX.
Components are placed in the components/ folder for organization.

### 5. Props
Props are how components receive data from their parent.

```jsx
 <UserFavoriteFoods food={user.favoriteFoods} />
```

food is the prop name.
user.favoriteFoods is the data being passed down.

### 6. Prop Drilling
Prop drilling happens when you need to pass data through multiple levels of components, even though only the deepest component needs it.

App → UserProfile → UserFavoriteFoods

This is fine in small apps, but in larger apps, too much prop drilling can make your code hard to manage.
Solutions include:

- Context API
- State management libraries (e.g., Redux, Zustand)

### 6.Lists
```jsx
const foodsList = food.map((item) => (
  <li key={item.id}>{item.name}</li>
));
```

key helps React identify which items changed, were added, or removed.
Keys should be unique and stable (like id).

