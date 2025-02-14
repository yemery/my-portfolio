export function calculateDurationInMonths(expression) {
    const [start, end] = expression.split(" - ");
    const startDate = new Date(start);
    const endDate = end == "Present" ? new Date() : new Date(end);
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    return months + 1;
  }