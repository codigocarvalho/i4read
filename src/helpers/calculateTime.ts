export const calculateTime = (utc: number) => {
  const date = new Date(utc * 1000);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffDays = Math.floor(diff / (1000 * 3600 * 24));
  const diffHours = Math.floor(diff / (1000 * 3600));

  if (diffDays > 0) {
    return `${diffDays} ${diffDays > 1 ? 'days' : 'day'} ago`;
  }

  if (diffHours > 0) {
    return `${diffHours} ${diffHours > 1 ? 'hours' : 'hour'} ago`;
  }

  return 'Just now';
};
