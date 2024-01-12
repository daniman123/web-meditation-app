export interface IPlayPauseButton {
  isPlaying: boolean;
  togglePlayPause: () => void;
}

const PlayPauseButton = ({ togglePlayPause, isPlaying }: IPlayPauseButton) => {
  return (
    <button onClick={togglePlayPause} aria-pressed={isPlaying}>
      {isPlaying ? "Pause" : "Play"}
    </button>
  );
};

export default PlayPauseButton;
