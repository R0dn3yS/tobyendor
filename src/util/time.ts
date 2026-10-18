
export function miliToMinutes(time: number): string {
  let minutes = Math.floor(time / 60000);
  let seconds = ((time % 60000) / 1000).toFixed(0);

  if (seconds === '60') {
    seconds = '0';
    minutes++;
  }

  return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
}