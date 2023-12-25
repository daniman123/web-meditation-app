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

export const timeValueOptions = () => [
  ...Array.from({ length: 2 }, (_, i) => 5 + 5 * i),
  ...Array.from({ length: 3 }, (_, i) => 15 + 15 * i),
  ...Array.from({ length: 60 }, (_, i) => 60 + 60 * i),
];
