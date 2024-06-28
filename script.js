const date1Input = document.getElementById('date1');
const date2Input = document.getElementById('date2');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');
const daysDiffElement = document.getElementById('days-diff');
const monthsDiffElement = document.getElementById('months-diff');
const yearsDiffElement = document.getElementById('years-diff');

flatpickr("#date1", {
    dateFormat: "d-m-Y",
    onChange: function(selectedDates, dateStr, instance) {
        date1Input.value = dateStr;
    }
});

flatpickr("#date2", {
    dateFormat: "d-m-Y",
    onChange: function(selectedDates, dateStr, instance) {
        date2Input.value = dateStr;
    }
});

calculateBtn.addEventListener('click', calculateDates);

function calculateDates(event) {
    event.preventDefault(); // prevent form submission
    const date1 = new Date(date1Input.value.split('-').reverse().join('-'));
    const date2 = new Date(date2Input.value.split('-').reverse().join('-'));

    if (!date1 ||!date2) {
        alert('Please enter both dates');
        return;
    }

    const diff = date2 - date1;
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(monthsDiff / 12);

    daysDiffElement.textContent = `Difference in days: ${daysDiff}`;
    monthsDiffElement.textContent = `Difference in months:${monthsDiff}`;
    yearsDiffElement.textContent = `Difference in years: ${yearsDiff}`;
}