import getSingularOrPlural from './getSingularOrPlural';

export const TIME_FORMAT_STYLE = {
  SHORT: 'SHORT',
  MEDIUM: 'MEDIUM',
};

export default (dateStr, formatStyle = TIME_FORMAT_STYLE.MEDIUM) => {
  const date = new Date(dateStr);
  const currentDate = new Date();
  const timeDiffInSec = (currentDate - date) / 1000;

  const oneMinute = 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  const oneMonth = oneDay * 30; // 30 days taken as a month
  const oneYear = oneDay * 365; // 365 days taken as a year

  const minDiff = Math.floor(timeDiffInSec / oneMinute);
  const hourDiff = Math.floor(timeDiffInSec / oneHour);
  const dayDiff = Math.floor(timeDiffInSec / oneDay);
  const weekDiff = Math.floor(timeDiffInSec / oneWeek);
  const monthDiff = Math.floor(timeDiffInSec / oneMonth);
  const yearDiff = Math.floor(timeDiffInSec / oneYear);

  if (formatStyle === TIME_FORMAT_STYLE.SHORT) {
    // less than 3 minutes
    if (timeDiffInSec < 3 * oneMinute) return 'now';

    // more than 3min to less than 1 hr
    if (timeDiffInSec > 3 * oneMinute && timeDiffInSec < oneHour)
      return `${minDiff}min`;

    // more than 1 hr to less than 1 day
    if (timeDiffInSec > oneHour && timeDiffInSec < oneDay)
      return `${hourDiff}h`;

    // more than 1 day to less than 1 week
    if (timeDiffInSec > oneDay && timeDiffInSec < oneWeek) return `${dayDiff}d`;

    // more than 1 week to less than 1 month
    if (timeDiffInSec > oneWeek && timeDiffInSec < oneMonth)
      return `${weekDiff}w`;

    // more than 1 month to less than 1 year
    if (timeDiffInSec > oneMonth && timeDiffInSec < oneYear)
      return `${monthDiff}mon`;

    // more than 1 year
    if (timeDiffInSec > oneYear) return `${yearDiff}y`;
  }

  if (formatStyle === TIME_FORMAT_STYLE.MEDIUM) {
    // less than 3 minutes
    if (timeDiffInSec < 3 * oneMinute) return 'Just Now';

    // more than 3min to less than 1 hr
    if (timeDiffInSec > 3 * oneMinute && timeDiffInSec < oneHour)
      return `${minDiff} minutes ago`;

    // more than 1 hr to less than 1 day
    if (timeDiffInSec > oneHour && timeDiffInSec < oneDay)
      return `${hourDiff} ${getSingularOrPlural('hour', hourDiff)} ago`;

    // more than 1 day to less than 1 week
    if (timeDiffInSec > oneDay && timeDiffInSec < oneWeek)
      return `${dayDiff} ${getSingularOrPlural('day', dayDiff)} ago`;

    // more than 1 week to less than 1 month
    if (timeDiffInSec > oneWeek && timeDiffInSec < oneMonth)
      return `${weekDiff} ${getSingularOrPlural('week', weekDiff)} ago`;

    // more than 1 month to less than 1 year
    if (timeDiffInSec > oneMonth && timeDiffInSec < oneYear)
      return `${monthDiff} ${getSingularOrPlural('month', monthDiff)} ago`;

    // more than 1 year
    if (timeDiffInSec > oneYear)
      return `${yearDiff} ${getSingularOrPlural('year', yearDiff)} ago`;
  }
};
