# AquaLife - Aquarium E-Commerce Website

AquaLife is a modern aquarium and aquatic-life e-commerce frontend built with React and Vite. The project provides a complete shopping-style experience for aquarium enthusiasts, including product browsing, categories, wishlist, cart management, authentication UI, offers, blog content, and order history.

> **Live Demo:** https://aqualife-psi.vercel.app/  
> **Source Code:** https://github.com/AfanShaikh/Aqua/tree/main/Frontend

## Overview

AquaLife is designed as a responsive aquarium shopping website with a dark aquatic interface and orange accent theme. It focuses on creating a clean and practical user experience while demonstrating React component development, state handling with Context API, reusable UI components, routing/page structure, and responsive styling.

The project is currently focused on the frontend experience and uses project data stored inside the React application.

## Features

### Customer Experience

- Responsive homepage
- Hero section with aquarium-themed visual
- Product categories
- Top-selling products section
- Product filtering by category
- Product cards with ratings and pricing
- Add to cart functionality
- Cart quantity controls
- Remove products from cart
- Cart total calculation
- Wishlist functionality
- Remove products from wishlist
- Move wishlist products to cart
- Empty-state UI for cart and wishlist
- Login and registration UI
- Logged-in navigation state
- Order history
- Order details modal
- Promotional offer countdown section
- Project/gallery section
- Aquarium blog/news section
- Newsletter subscription section
- Footer with contact information
- Theme toggle
- Scroll-to-top interaction

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Frontend UI development |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| React Icons | UI icons |
| CSS | Styling and responsive layout |
| Context API | Shared application state |
| Oxlint | Code linting |

The current frontend package configuration uses React 19.2.8, React DOM 19.2.8, React Icons 5.7.0, Vite 8.2.0, and Oxlint. 

## Project Structure

```text
Frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── blogs.js
│   │   ├── gallery.js
│   │   └── products.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/AfanShaikh/Aqua.git
```

### 2. Open the frontend folder

```bash
cd Aqua/Frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available through the local URL shown by Vite, normally:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates the production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs Oxlint against the project.

## Application Sections

### Home

The homepage contains the main hero section, categories, top-selling products, promotional offer, gallery, blog/news, newsletter, and footer.

### Products

Products are presented through reusable product cards with:

- Product image
- Product name
- Category
- Rating
- Price
- Wishlist action
- Add to cart action

### Wishlist

Users can save products for later and manage saved products from the wishlist interface.

### Cart

The cart provides:

- Product quantity
- Increase/decrease quantity
- Remove product
- Total price
- Checkout action
- Empty cart state

### Authentication

AquaLife includes login and registration interfaces with different navigation states for signed-in and signed-out users.

### Order History

After an order is placed, the order history interface displays:

- Order ID
- Order date
- Number of items
- Order total
- Order status
- Order details

The order details view displays customer/order information and individual products included in the order.

## UI Design

The interface uses a dark aquarium-inspired visual system with:

- Deep navy backgrounds
- Dark blue cards
- Orange primary actions
- Rounded cards and buttons
- Aquarium and fish imagery
- Responsive layouts
- Reusable modal interfaces
- Consistent spacing and typography

## Screenshots

### Homepage

![AquaLife Hero](src\assets\screenshots\hero.png)

### Categories

![AquaLife Categories](src\assets/screenshots/categories.png)

### Top Selling Products

![Top Selling Products](src\assets/screenshots/top-selling-products.png)

### Promotional Offer

![Promotional Offer](src\assets/screenshots/offer-section.png)

### Project Gallery

![Project Gallery](src\assets/screenshots/project-gallery.png)

### Blog

![AquaLife Blog](src\assets/screenshots/blog.png)

### Authentication

![Create Account](src\assets/screenshots/signup.png)

![Sign In](src\assets/screenshots/signin.png)

### Wishlist

![Wishlist](src\assets/screenshots/wishlist.png)

### Cart

![Cart](src\assets/screenshots/cart.png)

### Order History

![Order History](src\assets/screenshots/order-history.png)

### Order Details

![Order Details](src\assets/screenshots/order-details.png)

## Responsive Design

The frontend is designed to work across:

- Desktop screens
- Tablets
- Mobile devices

The layout adapts navigation, product grids, cards, modals, forms, and other sections for smaller screen sizes.

## Learning Goals

This project was built to practice and demonstrate:

- React component-based development
- Reusable components
- React Hooks
- Context API
- Shared state management
- Conditional rendering
- Form handling
- UI state management
- Responsive CSS
- Modal interfaces
- Shopping cart logic
- Wishlist logic
- Authentication UI
- Order history UI
- Frontend project organization
- Vite-based React development

## Future Improvements

Possible future improvements include:

- Connect the frontend to a backend API
- Add a real database
- Implement real user authentication
- Add secure session/token handling
- Add product search
- Add product detail pages
- Add real checkout and payment integration
- Add admin dashboard
- Add product management
- Add real order persistence
- Add backend API validation
- Add automated testing

## Deployment

The frontend is deployed using Vercel.

**Live Demo:** https://aqualife-psi.vercel.app/

## Repository

The source code is available here:

https://github.com/AfanShaikh/Aqua/tree/main/Frontend

## Author

**Afan Aslam Shaikh**

Frontend / Full Stack Developer

GitHub: https://github.com/AfanShaikh

## License

This project is created for learning, portfolio, and demonstration purposes.
