const calendarPicker = document.getElementById("calendar-picker");
const currentMonthYear = calendarPicker.querySelector(".current-month-year");
const calendarDays = calendarPicker.querySelector(".calendar-days");
const prevMonthBtn = calendarPicker.querySelector(".prev-month");
const nextMonthBtn = calendarPicker.querySelector(".next-month");

let currentDate = new Date();
let selectedDate = null;

function renderCalendar() {
    const year = currentDate.getFullYear(); // Get the current year
    const month = currentDate.getMonth(); // Get the current month
    currentMonthYear.textContent = `${getMonthName(month)} ${year}`; // Display the current month and year

    const firstDay = new Date(year, month, 1).getDay(); // Get the first day of the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month

    calendarDays.innerHTML = ""; // Clear the previous days from the calendar

    // Adjust the first day to make Monday the first day of the week
    const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

    // Add empty divs to align the first day of the month correctly
    for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyDay = document.createElement("div");
        calendarDays.appendChild(emptyDay);
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i; // Set the day number
        dayElement.classList.add("day");

        // Highlight today's date
        const today = new Date();
        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayElement.classList.add("today");
        }

        // Highlight weekend days (Saturday and Sunday)
        const dayOfWeek = (adjustedFirstDay + i - 1) % 7; // Calculate the day of the week
        if (dayOfWeek === 5 || dayOfWeek === 6) { // Saturday = 5, Sunday = 6
            dayElement.classList.add("weekend");
        }

        // Highlight the selected date
        if (
            selectedDate &&
            i === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
        ) {
            dayElement.classList.add("selected");
        }

        // Add click event to select a date
        dayElement.addEventListener("click", () => selectDate(i));
        calendarDays.appendChild(dayElement);
    }
}

function selectDate(day) {
    // Update the selected date and re-render the calendar
    selectedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
    );
    renderCalendar();
}

function getMonthName(month) {
    // Return the full name of the month
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[month];
}

// Add event listener for the "Previous Month" button
prevMonthBtn.addEventListener("click", () => {
    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
    ); // Move to the previous month
    renderCalendar();
});

// Add event listener for the "Next Month" button
nextMonthBtn.addEventListener("click", () => {
    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
    ); // Move to the next month
    renderCalendar();
});

// Initial render of the calendar
renderCalendar();
