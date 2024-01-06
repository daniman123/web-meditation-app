import { useCountdownLogic } from "@/lib/hooks/useCountdownLogic";

interface CircularProgressBarProps {
  radius: number;
  initialTime: number;
  timeLeft: number;
}

const CircularProgressBar = ({
  radius,
  initialTime,
  timeLeft,
}: CircularProgressBarProps) => {
  const { strokeWidth, circumference, strokeDashoffset } = useCountdownLogic(
    initialTime,
    timeLeft,
    radius
  );
  return (
    <>
      {/* Background Circle */}
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        fill="none"
        stroke="#5585b5"
      />

      {/* Foreground Circle (Progress) */}
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        style={{ transition: "stroke-dashoffset 0.1s linear" }}
        fill="none"
        stroke="white"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
    </>
  );
};

export default CircularProgressBar;
