import { formatTimeValueDisplay } from "@/lib/utils";

export interface ICountDownTimer {
  initialTime: number;
  timeLeft: number;
}

const CountDownTimer = ({ initialTime, timeLeft }: ICountDownTimer) => {
  const radius = 150;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  // Calculate the strokeDashoffset to decrease clockwise
  const strokeDashoffset = (1 - timeLeft / initialTime) * circumference;
  if (isNaN(strokeDashoffset)) {
    return <></>;
  }
  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
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
      <text x="50%" y="50%" textAnchor="middle" stroke="black" dy=".3em">
        {formatTimeValueDisplay(initialTime - timeLeft)}
      </text>
    </svg>
  );
};

export default CountDownTimer;
