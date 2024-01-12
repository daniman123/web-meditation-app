import { ICircularSeekBar } from "./CircleSeekBar";

const base: ICircularSeekBar = {
  currentTime: 0,
  duration: 0,
  handleSeek: () => {},
};

export const mockCircleSeekBarProps = {
  base,
};
