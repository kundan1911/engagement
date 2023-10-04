/**
 * Formats a given timestamp into a date string in the format 'dd.mm.yyyy'.
 *
 * @param {number} timestamp - The timestamp to be formatted.
 * @returns {string} - A formatted date string.
 */
function formatDate(timestamp) {
  const date = new Date(timestamp);
  
  // Get day, month, and year from the date object
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Pad single digit day and month values with a leading zero
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return `${day}.${month}.${year}`;
}

export default formatDate;
