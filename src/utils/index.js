export function numberWithCommas(x) {
  if (x) {
    return Number(x).toLocaleString();
  }
  return x;
}
