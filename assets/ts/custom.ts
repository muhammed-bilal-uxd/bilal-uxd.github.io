function getYearMonthDifference(startDate, endDate) {
  // Calculate the total number of months difference
  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  // If the end day is less than the start day, subtract one month
  if (endDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  // Convert total months into years and remaining months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months };
}

function updateYearsDifference() {
  // Get the element with the date attribute
  const dateElement = document.getElementById("years");
  if (!dateElement) return;

  // Retrieve the date string from the data-date attribute
  const dateString = dateElement.getAttribute("data-date");
  if (!dateString) return;

  // Convert the string to a Date object
  const previousDate = new Date(dateString);

  // Use the current date for calculation
  const today = new Date();

  // Calculate the difference
  const difference = getYearMonthDifference(previousDate, today);

  // Update the inner HTML with the result
  dateElement.innerHTML = `${difference.years} years and ${difference.months} months.`;
}

// Call the method to update the element
updateYearsDifference();
