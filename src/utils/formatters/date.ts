/**
 * helper for formatting date with template string like moment.js
 * @param inputDate e.g new Date()
 * @param formatTemplate e.g "YYYY-MM-DD"
 * @returns date based template string e.g "2023-10-26"
 */
export function formatDate(inputDate: string, formatTemplate: string) {
  const date = new Date(inputDate);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  formatTemplate = formatTemplate.replace(
    'DD',
    day < 10 ? `0${day}` : `${day}`
  );
  formatTemplate = formatTemplate.replace('MMM', month);
  formatTemplate = formatTemplate.replace('YYYY', `${year}`);
  formatTemplate = formatTemplate.replace(
    'MM',
    (date.getMonth() + 1).toString().padStart(2, '0')
  );

  return formatTemplate;
}
