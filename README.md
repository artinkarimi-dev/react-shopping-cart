# ViaX Shop 🛒

## 💫 About the Project
This project is a modern e-commerce shop built with **React**, allowing users to browse products, add them to the shopping cart, and view purchased items with order details.  

The main goals of this project were to learn and implement:

- Building a fully functional **React front-end** with reusable components.
- Managing state between components for shopping cart functionality.
- Creating interactive UI with **Tailwind CSS**.
- Handling dynamic product data and user actions (add to cart, remove items).
- Using **React Router** for multiple page navigation.
- Building responsive layouts for desktop and mobile.

---

## 🧠 Key Features
- Browse a catalog of 12+ products with images, descriptions, and prices.
- Add products to a shopping cart and view selected items.
- Remove products from the cart.
- View **order details**, including subtotal, shipping, and total.
- Responsive and clean UI with Tailwind CSS.
- Mobile-friendly header with toggleable menu.
- Interactive buttons and animations (hover effects on products and buttons).

---

## 🛠 Technologies Used

| Layer     | Tech Used             | Description                                      |
|-----------|---------------------|--------------------------------------------------|
| Frontend  | React, JSX, Tailwind CSS | UI and DOM manipulation, responsive styling     |
| Routing   | React Router         | Navigation between Shop and Purchased pages     |
| Icons     | React Icons          | Shopping cart, menu, and action icons           |
| State     | React Component State| Managing cart, products, and UI interactions   |

---

## 🧪 Learning Outcomes
Through this project, the following key programming skills were strengthened:

- Understanding React **component structure** and **state management**.
- Passing data between parent and child components via props.
- Building reusable components (Header, Product, Purchased, btnMenu).
- Handling **events** (click, input changes) in React.
- Implementing responsive layouts using **Tailwind CSS**.
- Using **React Router** for multi-page navigation.
- Debugging UI and state issues effectively.

---

## 🧭 How It Works

The Shop page displays a list of products dynamically from the component state.

Users click Add to Cart on products, sending product data to the parent component.

The Purchased page displays all selected products with subtotal, shipping, and total.

Users can remove products from the cart using the trash icon.

The Header component provides navigation, search input, and a mobile-friendly toggle menu.

## ✅ Final Result

The project successfully demonstrates a fully functional e-commerce experience, with dynamic cart management, responsive design, and reusable React components.

It’s a practical example of a React front-end project that combines UI design, state management, and user interactivity.

## 🙌 Special Note

This project was not just about building a simple shop—it provided experience in state management, component communication, and responsive design, helping solidify real-world React development skills.

## 📦 Project Structure
```text
ViaX-Shop/
│
├── README.md                # Project documentation
├── package.json             # Dependencies and scripts
├── public/
│   └── index.html           # HTML entry point
│
├── src/                     # Frontend source files
│   ├── App.js               # Main React app component
│   ├── index.js             # React DOM rendering
│   ├── index.css            # Global styles
│   ├── header.js            # Header component with navigation
│   ├── btnMenu.js           # Shopping cart button component
│   ├── products.js          # Product card component
│   ├── shop.js              # Shop page with product listing
│   ├── purchased.js         # Purchased page with order details
│   └── assets/              # Product images and static assets
