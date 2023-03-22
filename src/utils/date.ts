export function getHoursAndMinutes(time: string){
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function getFormattedDate(time: number, full = false){
  const date = new Date(time);
  return date.toLocaleString('default', {
    month: full ? 'long' : 'short',
    day: 'numeric',
    weekday: full ? 'long' : 'short',
  });
}

export const getTimeStamp = (time: string) => {
  const date = new Date(time)
  return date.getTime()
}
