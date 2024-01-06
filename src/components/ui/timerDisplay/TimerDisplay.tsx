import CountDownTimer from "@/components/ui/countDownTimer/CountDownTimer";

export interface ITimerDisplay {
  duration: number;
  progress: number;
}

const TimerDisplay = ({ duration, progress }: ITimerDisplay) => (
  <div className="w-full h-1/2 flex justify-center items-center">
    <CountDownTimer initialTime={duration} timeLeft={progress} />
  </div>
);

export default TimerDisplay;
