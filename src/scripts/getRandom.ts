export default function getRandom(array: any[]) {
  const randomItem = array[Math.floor(Math.random() * array.length - 1)];
  return randomItem;
}
