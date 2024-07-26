# One Life Healthcare

One Life Healthcare is a modern and responsive web application designed to connect and heal through technology and community support. The platform focuses on mental well-being, providing a space for individuals to share their struggles and receive support from a caring community.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Modern and responsive design using Tailwind CSS.
- Secure user authentication with sign-up and login functionalities.
- Interactive `About Us` and `Contact Us` pages.
- Navbar updates based on user authentication status.
- Utilizes React Router for seamless navigation.

## Technologies Used

- **Frontend**: React, Tailwind CSS, JavaScript
- **Routing**: React Router
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Icons**: React Icons (FaInstagram, MdEmail, etc.)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/onelifehealthcare.git
   ```
2. Navigate to the project directory:
   ```sh
   cd onelifehealthcare
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5174`.

## Project Structure

```plaintext
onelifehealthcare/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   ├── ui/
│   │   ├── AppLayout.jsx
│   │   ├── Hero.jsx
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
└── README.md
```
