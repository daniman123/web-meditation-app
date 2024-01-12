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
      <CircularSeekBar
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
      />
      <TimeDisplay currentTime={currentTime} duration={duration} />
    </>
  );
};

export default PlayBackDisplay;
