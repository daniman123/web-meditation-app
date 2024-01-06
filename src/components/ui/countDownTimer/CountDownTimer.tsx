import CircularProgressBar from "./components/CircularProgressBar";
import TimerText from "./components/TimerText";

export interface ICountDownTimer {
  initialTime: number;
  timeLeft: number;
}

const CountDownTimer = ({ initialTime, timeLeft }: ICountDownTimer) => {
  const radius = 150;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <CircularProgressBar
        radius={radius}
        initialTime={initialTime}
        timeLeft={timeLeft}
      />
      <TimerText initialTime={initialTime} timeLeft={timeLeft} />
    </svg>
  );
};

export default CountDownTimer;
