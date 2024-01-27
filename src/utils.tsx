const formatTime = (
  time: number
): { minutes: string; seconds: string; centiseconds: string } => {
  const centiseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time % 60000) / 1000);
  const minutes = Math.floor(time / 60000);

  const padZero = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  // return `${padZero(minutes)}:${padZero(seconds)}.${padZero(centiseconds)}`;
  return {
    minutes: `${padZero(minutes)}`,
    seconds: `${padZero(seconds)}`,
    centiseconds: `${padZero(centiseconds)}`,
  };
};

export { formatTime };