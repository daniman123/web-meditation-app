const formatMinutes = (minutes: number): string => {
  return `${minutes}m`;
};

const formatSeconds = (seconds: number): string => {
  return `${seconds < 10 ? "0" : ""}${Math.ceil(seconds)}s`;
};

export const formatTimeValueDisplay = (value: number): string => {
  if (value >= 60) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return seconds === 0
      ? formatMinutes(minutes)
      : `${formatMinutes(minutes)}:${formatSeconds(seconds)}`;
  } else {
    return formatSeconds(value);
  }
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};