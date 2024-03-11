export const compareDate = (date1: Date, date2: Date) => {
  return new Date(date1).getTime() - new Date(date2).getTime();
};
