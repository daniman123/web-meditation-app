import useCircleSeekBar from "@/lib/hooks/useCircleSeekBar";
import useSeekBarInteraction from "@/lib/hooks/useSeekBarInteraction";
import { useEffect } from "react";

export interface ICircularSeekBar {
  handleSeek: (_time: number) => void;
  currentTime: number;
  duration: number;
}

const CircularSeekBar = ({
  handleSeek,
  currentTime,
  duration,
}: ICircularSeekBar) => {
  const { angle, handleMouseEvent, setAngle } =
    useSeekBarInteraction(handleSeek);

  const { strokeDashoffset, radius } = useCircleSeekBar(angle, 100);
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setAngle((currentTime / duration) * 100);
  }, [currentTime, duration, setAngle]);

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="150"
        r={radius}
        fill="none"
        stroke="#eee"
        strokeWidth="30"
        onMouseDown={handleMouseEvent}
        onMouseMove={handleMouseEvent}
      />
      <circle
        cx="150"
        cy="150"
        r={radius}
        fill="none"
        stroke="tomato"
        strokeWidth="30"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 150 150)"
        onMouseDown={handleMouseEvent}
        onMouseMove={handleMouseEvent}
      />
    </svg>
  );
};

export default CircularSeekBar;
