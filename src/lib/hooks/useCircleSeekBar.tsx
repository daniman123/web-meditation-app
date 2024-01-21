import { useMemo } from "react";

const useCircleSeekBar = (angle: number, radius: number) => {
  const circumference = -2 * Math.PI * radius;
  const strokeDashoffset = useMemo(
    () => (angle / 100) * circumference,
    [angle, circumference]
  );

  return { strokeDashoffset };
};

export default useCircleSeekBar;
