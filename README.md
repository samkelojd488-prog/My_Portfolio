# Personal Portfolio Website

## Project Overview

This is my personal portfolio website, built as a hands-on project to learn full-stack web development. It introduces me, presents my skills and projects, and provides a contact form for visitors.

My goal is to build and deploy a working full-stack portfolio by **31 December 2026**.

## Technologies Used

- HTML5 — website structure and content
- CSS3 — styling, layout, responsive design, and dark mode
- JavaScript — interactivity, DOM manipulation, and form validation

## Project Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features Implemented

### 1. Website Structure

- Navigation links to the website sections
- About section
- Skills section
- Projects section
- Contact section
- Footer

### 2. Styling and Layout

- Consistent colors and typography
- Styled sections and project cards
- Button styling and hover effects
- Rounded corners and spacing
- Contact form styling
- Input focus effects
- Dark mode styling
- Improved form layout for different screen sizes

### 3. Interactive Greeting

- A button displays my introduction.
- A show/hide control lets visitors hide the introduction.
- JavaScript event listeners handle button clicks.

### 4. Dark Mode

- A button toggles between dark and light appearance.
- JavaScript adds or removes the `dark-mode` CSS class.
- The button label updates when the theme changes.

### 5. Contact Form Validation

The contact form includes:
- Name input
- Email input
- Message field
- Submit button
- Feedback messages

JavaScript checks that all fields contain information and performs a basic email-format check.

The form displays error messages when validation fails and a success message when the information passes the checks. The form is cleared after successful validation.

**Important:** The form currently validates information in the browser. It does not yet send emails or save messages to a database.

### 6. Form Feedback Styling

- CSS classes control error and success message appearance.
- Error messages use red styling.
- Success messages use green styling.
- JavaScript controls the message text and applies the appropriate CSS class.

## JavaScript Concepts Practised

During this session, I practised:

- Declaring variables with `const`
- Selecting HTML elements with `document.getElementById()`
- Reading input using `.value`
- Removing surrounding spaces using `.trim()`
- Registering event listeners with `addEventListener()`
- Handling form submissions
- Preventing default browser behavior with `event.preventDefault()`
- Using `if` statements and the logical OR operator (`||`)
- Stopping a function using `return`
- Updating webpage content using `textContent`
- Changing CSS classes using `className`
- Toggling CSS classes using `classList.toggle()`
- Debugging JavaScript errors using the browser Console

## Debugging Experience

I encountered a JavaScript error:

```text
Uncaught TypeError: Cannot set properties of null (setting 'textContent')
```

The problem was caused by JavaScript being unable to find the expected feedback element in the HTML.

I fixed the issue by checking the HTML element ID and ensuring it matched the ID used in JavaScript.

This taught me to check element IDs carefully and use browser error messages to troubleshoot problems.

## Testing Results — 19 October 2026

- [x] Navigation links work correctly.
- [x] Greeting button displays the introduction.
- [x] Show/hide controls work.
- [x] Dark mode and light mode work.
- [x] Empty contact form displays an error.
- [x] Invalid email format displays an error.
- [x] Valid-looking input displays a success message.
- [x] Form fields clear after successful validation.
- [x] Success and error messages have the correct styling.
- [x] Form layout fits the page without horizontal overflow.
- [x] No new red errors appeared in the browser Console during final testing.
- [x] JavaScript practice quiz completed with a score of 3/3.

## Current Learning Progress

- [x] Create the HTML portfolio structure.
- [x] Style the website using CSS.
- [x] Add interactive greeting functionality.
- [x] Implement dark mode.
- [x] Create and style a contact form.
- [x] Add JavaScript form validation.
- [x] Add success and error feedback.
- [x] Test the main website features.
- [ ] Continue practising JavaScript and DOM manipulation.
- [ ] Improve project cards and add interactive project details.
- [ ] Learn React and build reusable components.
- [ ] Build a backend and API.
- [ ] Connect a database.
- [ ] Add further testing and validation.
- [ ] Deploy the completed full-stack portfolio.

## Next Session Plan

The next evening session will focus on improving the project cards and adding an interactive project-details feature using JavaScript.

Planned activities:

1. Review JavaScript variables, functions, event listeners, and conditions.
2. Improve the layout and consistency of the project cards.
3. Add a button to reveal additional project information.
4. Test the interaction, dark mode, and responsive layout.
5. Review the code and explain the concepts learned.

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a browser, or use the Live Server extension if installed.
3. Test the navigation, greeting button, dark mode, and contact form.
4. Open the browser Developer Tools and check the Console if an error occurs.

## Learning Approach

This project is being developed incrementally through hands-on coding, testing, debugging, and reviewing concepts.

The objective is not just to make the website work, but to understand the code and gradually gain the skills needed to build full-stack applications independently.

**Target completion date:** 31 December 2026.
