# Calendar Picker

A simple, interactive calendar picker implemented in HTML, CSS, and JavaScript. This component allows users to navigate between months, select specific dates, and highlights weekends and the current day.

## Features

- **Month Navigation**: Navigate between months using the "Previous" and "Next" buttons.
- **Date Selection**: Click on a date to select it.
- **Today Highlight**: Automatically highlights the current date.
- **Weekend Highlight**: Weekends are styled differently for better visibility.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Hover Effects**: Interactive hover effects for better user experience.

## Getting Started

### Prerequisites

Ensure you have a modern browser that supports JavaScript and CSS Grid.

### Installation

1. Clone the repository or copy the code into your project directory.
2. Save the HTML, CSS, and JavaScript in the respective files (`index.html`, `styles.css`, and `index.js`).

### Usage

1. Include the `styles.css` for styling and `index.js` for functionality.
2. Open the `index.html` file in your browser to see the calendar picker in action.


## Customization

You can customize the calendar by modifying the CSS or JavaScript:

### CSS

- Adjust the colors, fonts, and sizes in `styles.css` to match your design requirements.
- Modify hover effects and transitions for buttons and day elements.

### JavaScript

- Change the month and year format by editing the `getMonthName` function.
- Add additional functionality like event handling for selected dates in `index.js`.

## Code Overview

### HTML Structure

The HTML contains:
- A container (`#calendar-picker`) for the calendar.
- Navigation buttons (`.prev-month` and `.next-month`).
- A header (`.current-month-year`) showing the current month and year.
- Weekday labels (`.weekdays`).
- Day elements (`.calendar-days`).

### CSS Highlights

- **Root Styles**: Dark blue background and responsive design with flexbox centering.
- **Header**: Month and year displayed with bold text and a bottom border for separation.
- **Days Grid**: CSS Grid layout for easy alignment of days.
- **Hover Effects**: Smooth scaling and color transitions for better interactivity.

### JavaScript Highlights

- **Rendering**: `renderCalendar()` dynamically generates the calendar for the selected month and year.
- **Date Selection**: Clicking a day highlights it and stores it as the selected date.
- **Month Navigation**: Buttons allow navigation to previous and next months.
- **Highlighting**: Automatically highlights weekends and today's date.

## Example Screenshot

Include a screenshot of the calendar picker here (if available).

## License

This project is open-source and free to use under the [MIT License](LICENSE).


Happy coding!
