```md
# Password Generator

A simple front-end password generator built with HTML, CSS, and JavaScript. The app creates two random passwords based on the length entered by the user and displays them on the page.

## Preview

This project includes:

- A styled landing section with a password generator UI
- An input field for choosing password length
- A button that generates two random passwords
- Character support for uppercase, lowercase, numbers, and symbols

## Tech Stack

- HTML
- CSS
- JavaScript

## Project Structure

```text
.
├── index.html
├── style.css
├── hi.js
└── README.md
```

## How It Works

1. Enter the desired password length in the input field.
2. Click `Generate a strong password`.
3. The app creates two random passwords and shows them in the output boxes.

## Getting Started

Because this is a small static project, no installation is required.

1. Clone or download the repository.
2. Open `index.html` in your browser.

You can also run it with a local development server if you prefer.

## Example Use Cases

- Creating quick test passwords during development
- Practicing JavaScript DOM manipulation
- Learning how random string generation works in the browser

## Current Notes

- The password length is taken directly from the input field.
- Two passwords are generated at a time.
- The script currently shows a name prompt when the page loads, but that value is not used by the app.
- A `copyPassword()` function exists in the JavaScript file, but it is not implemented yet.

## Possible Improvements

- Add copy-to-clipboard buttons
- Validate password length input
- Let users choose whether to include symbols or numbers
- Add mobile-friendly layout improvements
- Replace inline `onclick` handlers with event listeners

## Author

Built as a beginner-friendly JavaScript project for practicing front-end fundamentals.
```
