function getYearMonthDifference(startDate, endDate) {
    // Calculate the total number of months difference
    var totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());
    // If the end day is less than the start day, subtract one month
    if (endDate.getDate() < startDate.getDate()) {
        totalMonths--;
    }
    // Convert total months into years and remaining months
    var years = Math.floor(totalMonths / 12);
    var months = totalMonths % 12;
    return { years: years, months: months };
}
function updateYearsDifference() {
    // Get the element with the date attribute
    var dateElement = document.getElementById("years");
    if (!dateElement)
        return;
    // Retrieve the date string from the data-date attribute
    var dateString = dateElement.getAttribute("data-date");
    var yearLoss = dateElement.getAttribute("data-year-loss");
    if (!dateString)
        return;
    // Convert the string to a Date object
    var previousDate = new Date(dateString);
    // Use the current date for calculation
    var today = new Date();
    // Calculate the difference
    var difference = getYearMonthDifference(previousDate, today);
    // Subtract the year loss if it exists
    var adjustedYears = yearLoss
        ? difference.years - parseInt(yearLoss)
        : difference.years;
    // Update the inner HTML with the result
    dateElement.innerHTML = "".concat(adjustedYears, " years");
    // dateElement.innerHTML = `${adjustedYears} years and ${difference.months} months.`;
}
// Call the method to update the element
updateYearsDifference();
