export const loggerDateFormatter = (date?: string | Date | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    year: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', options)
    : new Date().toLocaleDateString('en-US', options);

  return formattedDate;
};
