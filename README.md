# Interactive Product Listing App

## Overview
This React application is developed as a homework assignment for the AI-Powered Web Development with React course. It demonstrates how to fetch data from an API and build an interactive UI featuring product listing, search, sort, and selection capabilities.

## Live Demo & Repository
- **Live Demo:** _[Product Listing App](https://prducts.netlify.app/)_
- **GitHub Repository:** _[Product Listing GitHub](https://github.com/nawaf110005/11-Products-Home-Page-App\)_

## Features
1. **Product Listing**
   - Fetches products from the DummyJSON API.
   - Displays each product in a responsive grid (3 columns on desktop).
   - Shows product image, title, price (with discount), and rating (star icons).
   - Loading spinner during data fetch and error alert on failure.

2. **Search & Sort**
   - Search bar to filter products by title (case-insensitive).
   - Sort dropdown to order products by:
     - Name (A → Z, Z → A)
     - Price (Low → High, High → Low)
     - Rating (Low → High, High → Low)

3. **Interactive Selection**
   - Click on a product card to select or deselect.
   - Selected cards have a 2px solid red border.
   - Multiple selections supported and persisted through re-renders.
   - Hover effect with slight scale transform.

4. **Full-Content Images**
   - Uses the full-size product image (`images[0]`) with `object-fit: contain` to ensure the entire image is visible without cropping.

## Technologies & Libraries
- **Vite** (v5) as build tool
- **React** (v18)
- **Ant Design** (v5) for UI components
- **Axios** for HTTP requests
- **CSS** for custom styles (transitions, hover effects)

## Getting Started
### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation & Running
```bash
# If starting a new project scaffold with Vite
npm create vite@latest product-listing-app -- --template react

# Or clone this repository
git clone https://github.com/nawaf110005/11-Products-Home-Page-App.git
cd 11-Products-Home-Page-App

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

To build for production:
```bash
npm run build
```

## Project Structure
```
11-Products-Home-Page-App/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ProductCard.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Assignment Requirements
- **Task 1:** Fetch and display products from the DummyJSON API with loading and error states.
- **Task 2:** Implement interactive selection (click to select/deselect), search, sort, and visual feedback (border, hover).

## Customization & Styling
- Styled with Ant Design components and custom CSS for transitions and layout.
- You can switch to CSS Modules, styled-components, or another CSS framework as needed.

## License
This project is for educational purposes only.
