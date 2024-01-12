import { IPlayPauseButton } from "./PlayPauseButton";

const base: IPlayPauseButton = {
  isPlaying: false,
  togglePlayPause: () => {},
};

export const mockPlayPauseButtonProps = {
  base,
};
