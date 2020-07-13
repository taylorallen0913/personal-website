import moment from 'moment';

export const parseDate = (rawDate: string): string => {
  let dateArr = moment(rawDate).toString().split(' ');
  dateArr = dateArr.slice(1, 4);
  dateArr[1] += ',';
  return dateArr.join(' ');
};
