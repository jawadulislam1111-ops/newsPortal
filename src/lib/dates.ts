const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Preserve the precision and timezone actually recorded by the newsroom, independent of build timezone. */
export function isoNewsDate(value: string): string | undefined {
  const match = /^(\w{3}) (\d{1,2}), (\d{4})(?:, (\d{2}):(\d{2}) (EST|EDT))?$/.exec(value);
  if (!match) return undefined;
  const [, month, day, year, hour, minute, zone] = match;
  const number = months.indexOf(month) + 1;
  if (!number || Number(day) < 1 || Number(day) > new Date(Date.UTC(Number(year), number, 0)).getUTCDate()) return undefined;
  const date = year + '-' + String(number).padStart(2, '0') + '-' + day.padStart(2, '0');
  if (!zone) return date;
  if (Number(hour) > 23 || Number(minute) > 59) return undefined;
  return date + 'T' + hour + ':' + minute + (zone === 'EST' ? '-05:00' : '-04:00');
}
