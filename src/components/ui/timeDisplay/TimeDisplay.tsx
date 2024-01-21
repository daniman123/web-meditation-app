import { formatTime } from "@/lib/utils";

export interface ITimeDisplay {
  currentTime: number;
  duration: number;
}

const TimeDisplay = ({ currentTime, duration }: ITimeDisplay) => {
  return (
    <div className="flex items-center justify-center p-3 text-white font-semibold text-3xl">
      <p>
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>
    </div>
  );
};

export default TimeDisplay;
