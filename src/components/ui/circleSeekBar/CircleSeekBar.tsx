import useSeekBarInteraction from "@/lib/hooks/useSeekBarInteraction";
import { useEffect } from "react";

export interface ICircularSeekBar {
  handleSeek: (_time: number) => void;
  currentTime: number;
  duration: number;
}

const CircularSeekSVG = ({
  radius,

  handleMouseEvent,
}: {
  radius: number;
  handleMouseEvent: (
    _event: React.MouseEvent<SVGCircleElement, MouseEvent>
  ) => void;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="300"
    height="300"
    viewBox="0 0 300 300"
  >
    <circle
      cx="150"
      cy="150"
      r={radius * 0.75}
      fill="#eee"
      stroke="#eee"
      strokeWidth="30"
    />
    <circle
      cx="150"
      cy="150"
      r="100"
      fill="none"
      stroke="transparent"
      strokeWidth="30"
      onMouseDown={handleMouseEvent}
      onMouseMove={handleMouseEvent}
    />
    <circle
      id="blueCircle"
      cx="150"
      cy="150"
      r="100"
      fill="none"
      stroke="tomato"
      strokeWidth="30"
      transform="rotate(-90 150 150)"
      onMouseDown={handleMouseEvent}
      onMouseMove={handleMouseEvent}
    />
  </svg>
);
const CircularSeekBar = ({
  handleSeek,
  currentTime,
  duration,
}: ICircularSeekBar) => {
  const radius = 100;
  const { angle, handleMouseEvent, setAngle } =
    useSeekBarInteraction(handleSeek);

  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (duration > 0) {
      setAngle(((duration - currentTime) / duration) * 100);
    } else {
      setAngle(0);
    }
  }, [currentTime, duration, setAngle]);

  useEffect(() => {
    const blueCircle = document.getElementById("blueCircle");
    if (!blueCircle) return;

    blueCircle.setAttribute("stroke-dasharray", circumference.toString());
    blueCircle.setAttribute(
      "stroke-dashoffset",
      (-circumference * (angle / 100)).toString()
    );
  }, [currentTime, duration, angle, circumference]);

  return (
    <CircularSeekSVG radius={radius} handleMouseEvent={handleMouseEvent} />
  );
};

export default CircularSeekBar;
