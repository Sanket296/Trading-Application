# 📈 Trade Wave: Financial Portfolio & Trading Dashboard

**Trade Wave is a specialized financial dashboard built to provide high fidelity visualization of trading portfolios.Built with a segregated frontend architecture, the platform ensures security isolation while providing real time data visualization.**

## 🚀 Key Features

* Security Isolation Architecture: The application is structured with segregated frontend services for landing pages and the user dashboard, ensuring clear isolation between public areas and authenticated user data.
* Dynamic Data Visualization: Integrated Chart.js to render real time financial insights.
  Doughnut Charts: For visualizing asset and portfolio distribution.
  Vertical Bar Graphs: For detailed holdings analysis and performance tracking.
* Modular Dashboard Routing: Built a robust navigation system using React Router, enabling seamless transitions between complex dashboard views.
* Hybrid Styling: Utilizes a combination of Material UI (MUI) and Bootstrap to deliver a professional, responsive financial interface.

## 🏗️ Technical Architecture
**The codebase follows a modern full-stack implementation with a focus on client-side performance.**
* Frontend: React.js, JavaScript (ES6+), Material UI, Bootstrap.
* Backend: Node.js and Express.js logic.
* Database Integration: MongoDB for persistent data management.
* Client Side Routing: React Router for complex view management.
* Data Layer: Custom mapping logic to interface raw JSON data with Chart.js components.


## 🛠️ Engineering Challenges & Solutions

**1. Service Segregation & Security**
* Challenge: Ensuring that the public facing marketing components and the high security dashboard components do not share unauthorized states.
* Solution: Architected the application into segregated services. This ensures that the authenticated user environment is logically isolated from the public landing pages at the routing and component levels.

 **2. High-Density Financial Data Visualization**
* Challenge: Rendering complex financial holdings in a way that is immediately actionable for the user.
* Solution: Implemented specialized Chart.js instances.

**3. State-Persistent Modular Routing**
* Challenge: Maintaining a seamless user experience while navigating through multiple nested dashboard views.
* Solution: Leveraged React Router to build a modular routing system. This allows the application to handle complex pathing for dashboard views while preserving the underlying state and avoiding unnecessary re-renders.

##🚦 Getting Started
**Prerequisites**
* Node.js
* MongoDB Atlas account or local installation
* npm

 ## Installation
 * Clone the repo: ` ` `bash [git clone https://github.com/Sanket296/Trading-Application.git] ` ` `
 ` ` `bash [cd Trading-Application] ` ` `    
 * Install dependencies: ` ` `bash [npm install] ` ` `
 * Run the app: ` ` `bash [npm start] ` ` `

## Author
**Sanket Neekhra**
