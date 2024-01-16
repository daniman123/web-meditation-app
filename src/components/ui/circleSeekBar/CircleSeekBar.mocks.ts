import { ICircularSeekBar } from "./CircleSeekBar";

const base: ICircularSeekBar = {
  currentTime: 25,
  duration: 100,
  handleSeek: () => {},
};

export const mockCircleSeekBarProps = {
  base,
};
