# Currency Converter

This project is a React-based currency converter application that allows users to convert between different currencies using real-time exchange rates.

## Table of Contents

- [Features](#features)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Features

- Real-time currency conversion
- Support for multiple currencies
- User-friendly interface
- Responsive design for mobile and desktop

## Components

### App.jsx

The main component that renders the entire application.

- State management for amount, converted amount, and selected currencies
- Fetches currency data using a custom hook
- Handles currency conversion and swap functionality

### InputBox.jsx

A reusable component for input fields and currency selection.

- Accepts props for customization (label, amount, currency options, etc.)
- Handles user input for amount and currency selection

### useCurrencyInfo.js

A custom hook for fetching currency exchange rate data.

- Fetches data from an API based on the selected currency
- Returns an object with exchange rates for various currencies

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

## Usage

1. Enter an amount in the "From" input field
2. Select the currency you're converting from
3. Select the currency you're converting to
4. Click the "Convert" button to see the result
5. Use the "Swap" button to quickly switch between currencies

## Dependencies

- React
- Vite (for project setup and development)
- Tailwind CSS (for styling)

For a complete list of dependencies, please refer to the `package.json` file.
