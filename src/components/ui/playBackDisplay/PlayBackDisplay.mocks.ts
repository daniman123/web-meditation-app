import { IPlayBackDisplay } from "./PlayBackDisplay";

const base: IPlayBackDisplay = {
  currentTime: 0,
  duration: 0,
  handleSeek: () => {},
};

export const mockPlayBackDisplayProps = {
  base,
};
