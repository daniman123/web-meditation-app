import CircularSeekBar from "../circleSeekBar/CircleSeekBar";
import TimeDisplay from "../timeDisplay/TimeDisplay";

export interface IPlayBackDisplay {
  handleSeek: (_time: number) => void;
  currentTime: number;
  duration: number;
}

const PlayBackDisplay = ({
  currentTime,
  duration,
  handleSeek,
}: IPlayBackDisplay) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <CircularSeekBar
          currentTime={currentTime}
          duration={duration}
          handleSeek={handleSeek}
        />
      </div>
      <TimeDisplay currentTime={currentTime} duration={duration} />
    </>
  );
};

export default PlayBackDisplay;
