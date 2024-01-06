import { formatTimeValueDisplay } from "@/lib/utils";

interface TimerTextProps {
  initialTime: number;
  timeLeft: number;
}

const TimerText = ({ initialTime, timeLeft }: TimerTextProps) => (
  <text x="50%" y="50%" textAnchor="middle" stroke="black" dy=".3em">
    {formatTimeValueDisplay(initialTime - timeLeft)}
  </text>
);

export default TimerText;
