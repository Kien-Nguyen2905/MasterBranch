import dayjs from 'dayjs';

export const monthOptions = Array.from({ length: 12 }, (_, i) => ({
  value: i,
  label: dayjs().month(i).format('MMMM'),
}));
