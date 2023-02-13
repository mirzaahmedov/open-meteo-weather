export const getDate = (time: number) => {
  const date = new Date(time);
  return date.toLocaleString(undefined, {
    month: "short",
    weekday: "short",
    day: "numeric",
  });
};

const test = "sting";
console.log(test);
