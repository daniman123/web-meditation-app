import { formatTime } from "@/lib/utils";

export interface ITimeDisplay {
  currentTime: number;
  duration: number;
}

const TimeDisplay = ({ currentTime, duration }: ITimeDisplay) => {
  return (
    <div>
      {formatTime(currentTime)} / {formatTime(duration)}
    </div>
  );
};

export default TimeDisplay;
