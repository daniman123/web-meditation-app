import { IPlayPauseButton } from "./PlayPauseButton";

const base: IPlayPauseButton = {
  isPlaying: false,
  togglePlayPause: () => {},
};
const secondary: IPlayPauseButton = {
  isPlaying: true,
  togglePlayPause: () => {},
};

export const mockPlayPauseButtonProps = {
  base,
  secondary,
};
