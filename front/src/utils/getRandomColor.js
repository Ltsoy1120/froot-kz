export const getRandomColor = () => {
  const r = [];
  for (let i = 0; i < 3; i++) {
    r.push(Math.round(Math.random() * 155) + 100);
  }
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
};
