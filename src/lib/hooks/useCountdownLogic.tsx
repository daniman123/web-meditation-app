export const useCountdownLogic = (
  initialTime: number,
  timeLeft: number,
  radius: number
) => {
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  // Calculate the strokeDashoffset to decrease clockwise
  const strokeDashoffset = (1 - timeLeft / initialTime) * circumference;

  return {
    isValid: !isNaN(strokeDashoffset),
    strokeWidth,
    circumference,
    strokeDashoffset,
  };
};
