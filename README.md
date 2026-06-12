# 🏠 Irani Farsh

A modern carpet e-commerce frontend built with React, Redux Toolkit, React Router, and Tailwind CSS.

Designed from Figma and implemented with a focus on reusable components, responsive design, state management, and scalable architecture.

The project was developed with a strong focus on:

* Reusable Components
* Responsive Design
* Clean Architecture
* State Management
* Scalability
* Modern React Development Practices

---

## ✨ Features

### Product Showcase

* Home page product listing
* Handmade carpet section
* Machine-made carpet section
* Product categories
* Product detail page
* Similar products section
* Product image gallery
* Customer reviews

### Shopping Cart

* Add products to cart
* Remove products from cart
* Increase quantity
* Decrease quantity
* Automatic total calculation
* Empty cart state
* Persistent cart using LocalStorage

### Authentication UI

* Login page
* Register page
* Responsive authentication layout
* Reusable form inputs
* Password visibility toggle

### User Experience

* Dynamic document titles
* Breadcrumb navigation
* Scroll to top on route change
* Responsive layouts
* Reusable UI components
* Custom layouts
* 404 page

---

## 🎨 Design Reference

This project was developed based on a Figma design and implemented as a fully responsive React application.

During development, special attention was given to accurately reproducing the original design, including:

* Layout Structure
* Typography
* Color Palette
* Component Design
* Spacing & Alignment
* Responsive Behavior
* User Experience

The goal was to translate the design into reusable React components while maintaining consistency across different screen sizes.

### Figma Design

https://www.figma.com/community/file/1379758262998274433

---

## ⚙️ Technologies Used

### Core

* React 19
* React Router 7
* Redux Toolkit
* React Redux

### Routing

* createBrowserRouter
* Nested Routes
* Dynamic Routes
* Route Parameters
* Layout-Based Routing
* Scroll Restoration

### Styling

* Tailwind CSS 4

### UI Libraries

* React Icons
* Lucide React
* React Hot Toast

### Build Tools

* Vite
* ESLint

---

## 🗂 Project Architecture

The project follows a scalable and component-driven architecture.

```text
src
├── components
├── data
├── features
├── hooks
├── layouts
├── pages
├── router
├── store
├── styles
├── utils
```

---

## 🗄 Redux State Management

Redux Toolkit is used to manage the shopping cart globally across the application.

### Implemented Redux Features

* configureStore
* createSlice
* reducers
* actions
* selectors
* useSelector
* useDispatch

### Cart Operations

* addToCart
* deleteFromCart
* increaseQuantity
* decreaseQuantity

### Selectors

Custom selectors were created to derive data efficiently:

* selectCart
* selectTotalItems
* selectTotalPrice

### Store Structure

```js
{
  cart: {
    cart: []
  }
}
```

### Persistence

Shopping cart data is automatically synchronized with LocalStorage, allowing users to keep their cart after page refreshes.

This approach centralizes business logic, prevents prop drilling, and improves maintainability.

---

## 🛣 Routing System

Routing is implemented using React Router 7 and follows a layout-based architecture.

### Application Routes

```text
/
├── Home Page

/product/:id
├── Product Details Page

/cart
├── Shopping Cart Page

/login
├── Login Page

/register
├── Register Page

*
├── Not Found Page (404)
```

### Layout Architecture

The application uses two independent layouts.

#### MainLayout

Used for:

* Home Page
* Product Details Page
* Cart Page

Contains:

* Header
* Footer

#### AuthLayout

Used for:

* Login Page
* Register Page

Provides a dedicated authentication experience.

### Dynamic Routing

Product pages are rendered dynamically using route parameters:

```js
/product/:id
```

The product ID is extracted using:

```js
const { id } = useParams();
```

### Scroll Restoration

A custom ScrollToTopWrapper component automatically scrolls the page to the top whenever route navigation occurs.

---

## 🧩 Reusable Components

Several reusable components were developed to reduce duplication and improve maintainability.

Examples:

* ProductCard
* ProductGallery
* ProductInfo
* ProductSeller
* SimilarProducts
* Breadcrumb
* Button
* AuthInput
* PasswordInput
* LoginForm
* RegisterForm

---

## 🪝 Custom Hooks

### useDocumentTitle

A custom hook was created to dynamically update the browser tab title on each page.

Example:

```js
useDocumentTitle("ثبت نام | ایرانی فرش");
```

---

## 📱 Responsive Design

The application was designed to provide a consistent experience across:

* Mobile
* Tablet
* Desktop

Tailwind CSS responsive utilities were used extensively throughout the project.

---

## 🎯 Challenges & Solutions

### Reusable Authentication Components

#### Challenge

Login and Register pages shared many UI patterns.

#### Solution

Reusable authentication components were created:

* AuthLayout
* AuthInput
* PasswordInput
* LoginForm
* RegisterForm

---

### Global State Management

#### Challenge

Managing shopping cart data across multiple components.

#### Solution

Redux Toolkit was implemented to centralize cart state and avoid prop drilling.

---

### Cart Persistence

#### Challenge

Keeping shopping cart data after browser refresh.

#### Solution

Redux state is synchronized with LocalStorage.

---

### Dynamic Product Pages

#### Challenge

Rendering product details based on route parameters.

#### Solution

React Router dynamic routing was implemented:

```text
/product/:id
```

---

### Pixel-Perfect Figma Implementation

#### Challenge

Converting a Figma design into a fully responsive application while maintaining consistency in spacing, typography, colors, and component behavior across different screen sizes.

#### Solution

The UI was built using reusable React components and Tailwind CSS utilities. A component-based architecture was adopted to ensure design consistency, maintainability, and responsiveness while closely matching the original Figma design.

---

## 📚 What I Learned

During this project I improved my skills in:

* React 19
* React Router 7
* Nested Routing
* Dynamic Routing
* Layout-Based Routing
* Route Organization
* Redux Toolkit
* React Redux
* Global State Management
* Selector Patterns
* LocalStorage Persistence
* Component Reusability
* Responsive Design
* Custom Hooks
* Project Architecture
* Clean Code Principles
* Converting Figma Designs to Production-Ready UI
* Pixel-Perfect Implementation
* Design System Consistency
* Scalable Frontend Architecture

---

## 🔮 Future Improvements

Planned future enhancements:

* Backend Integration
* Authentication System
* Product Search API
* Product Filtering API
* RTK Query
* User Profile
* Wishlist
* Order Tracking
* Payment Gateway

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 👨‍💻 Developer

Developed by **Mohammad Jalali**

Frontend Developer specializing in:

* React
* Redux Toolkit
* JavaScript
* Tailwind CSS
* Responsive Web Design

### Connect With Me

GitHub
https://github.com/mohammad11jj

LinkedIn
https://www.linkedin.com/in/jalalimohammad/

Telegram
https://t.me/mohammad11jj
