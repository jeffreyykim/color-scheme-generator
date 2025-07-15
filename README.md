# Color Scheme Generator

A simple web application for practicing API integration and DOM manipulation. This project demonstrates how to fetch data from an external API and dynamically display the results on a webpage.

## Overview

This application allows users to generate color schemes by selecting a base color and choosing from different color harmony modes. It uses The Color API to fetch color schemes and displays them in a clean, interactive interface.

## Features

- **Color Input**: Select any base color using the color picker
- **Multiple Modes**: Choose from various color harmony modes:
  - Monochrome
  - Monochrome-Dark
  - Monochrome-Light
  - Analogic
  - Complement
  - Analogic-Complement
  - Triad
  - Quad
- **Click to Copy**: Click any color to copy its hex value to clipboard
- **Responsive Design**: Works on both desktop and mobile devices

## API Practice

This project demonstrates:

- **Fetch API**: Making HTTP requests to external APIs
- **Async/Await**: Handling asynchronous operations
- **Error Handling**: Graceful error handling for API failures
- **DOM Manipulation**: Dynamically creating and updating HTML elements
- **Event Handling**: Managing user interactions and form submissions

## API Used

[The Color API](https://www.thecolorapi.com/) - A simple REST API for color information and color schemes.

Example API call:
```
https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome&count=5
```

## Technologies

- **HTML5**: Structure and form elements
- **CSS3**: Styling, flexbox layout, and animations
- **JavaScript (ES6+)**: API integration, DOM manipulation, and event handling
- **Clipboard API**: Copy-to-clipboard functionality

## How to Use

1. Select a base color using the color picker
2. Choose a color harmony mode from the dropdown
3. Click "Get color scheme" to generate colors
4. Click any color band to copy its hex value
5. A confirmation message will appear when copied

## Learning Objectives

- Practice making API requests with fetch()
- Handle JSON responses and error states
- Manipulate the DOM dynamically
- Work with modern JavaScript features
- Implement user-friendly interactions
- Create responsive layouts with CSS

---
