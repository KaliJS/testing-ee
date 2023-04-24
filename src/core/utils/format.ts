/**
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

// ** Checks if the passed date is today
const isToday = (date: Date | string) => {
  const today = new Date();

  return (
    new Date(date).getDate() === today.getDate() &&
    new Date(date).getMonth() === today.getMonth() &&
    new Date(date).getFullYear() === today.getFullYear()
  );
};

export const formatDate = (
  value: Date | string,
  formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
) => {
  if (!value) return value;

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShort = (value: Date | string, toTimeForCurrentDay = true) => {
  const date = new Date(value);
  let formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShortYear = (value: Date | string) => {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
    new Date(value)
  );
};
