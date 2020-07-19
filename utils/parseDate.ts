import moment from 'moment';

export const parseDate = (rawDate: string): string => {
  let dateArr = moment(rawDate).toString().split(' ');
  dateArr = dateArr.slice(1, 4);
  dateArr[1] += ',';
  return dateArr.join(' ');
};

export const toDate = (rawDate: string): Date => {
  const dateArr = rawDate.split('-');
  return new Date(dateArr[2] + dateArr[0] + dateArr[1]);
};
