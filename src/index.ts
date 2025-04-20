import "./style.css";

// declare module "*.css";

class YearDifferenceCalculator {
  private element: HTMLElement;

  constructor(elementId: string) {
    const el = document.getElementById(elementId);
    if (!el) {
      throw new Error(`Element with id "${elementId}" not found`);
    }
    this.element = el;
  }

  // Private method to calculate the year and month difference
  private getYearMonthDifference(
    startDate: Date,
    endDate: Date
  ): { years: number; months: number } {
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

  // Public method to update the element's content with the difference
  public updateYearsDifference(): void {
    // Retrieve the date string from the data-date attribute
    const dateString = this.element.getAttribute("data-date");
    if (!dateString) return;

    // Convert the string to a Date object
    const previousDate = new Date(dateString);
    // Use the current date for calculation
    const today = new Date();

    // Calculate the difference
    const difference = this.getYearMonthDifference(previousDate, today);

    // Update the element's innerHTML with the result
    this.element.innerHTML = `${difference.years} years and ${difference.months} months.`;
  }
}

// Create an instance of the class with the target element id
const calculator = new YearDifferenceCalculator("years");
// Update the element
calculator.updateYearsDifference();
