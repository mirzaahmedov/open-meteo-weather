export function getHoursAndMinutes(time: string){
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function getFormattedDate(time: number, full = false){
  const date = new Date(time);
  return date.toLocaleString('default', {
    month: full ? 'long' : undefined,
    day: 'numeric',
    weekday: 'long',
  });
}
