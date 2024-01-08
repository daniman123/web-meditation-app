import useAudioPlayback from "@/lib/hooks/useAudioPlayback/useAudioPlayback";
import { formatTime } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface IAudioPlayback {
  src: string;
}

const AudioPlayback = ({ src }: IAudioPlayback) => {
  const {
    currentTime,
    duration,
    handleSeek,
    isPlaying,
    togglePlayPause,
  } = useAudioPlayback(src);

  const radius = 100;
  const circumference = 2 * Math.PI * radius;

  const [angle, setAngle] = useState(1);

  const getAngleFromMouseEvent = (
    event: React.MouseEvent<SVGCircleElement, MouseEvent>
  ) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (bounds.left + bounds.width / 2);
    const y = event.clientY - (bounds.top + bounds.height / 2);

    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = angle < 0 ? 360 + angle : angle;
    return ((angle + 90) / 360) * 100;
  };

  const handleMouseDown = (
    event: React.MouseEvent<SVGCircleElement, MouseEvent>
  ) => {
    const angle = getAngleFromMouseEvent(event);
    setAngle(angle);

    handleSeek(angle);
  };

  const handleMouseMove = (
    event: React.MouseEvent<SVGCircleElement, MouseEvent>
  ) => {
    if (event.buttons === 1) {
      const angle = getAngleFromMouseEvent(event);
      setAngle(angle);

      handleSeek(angle);
    }
  };

  useEffect(() => {
    setAngle((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const strokeDashoffset = circumference - (angle / 100) * circumference;

  return (
    <div className="grid p-5">
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>

      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle
          cx="150"
          cy="150"
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth="30"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        />
        <circle
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          cx="150"
          cy="150"
          r={radius}
          fill="none"
          stroke="tomato"
          strokeWidth="30"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 150 150)"
        />
      </svg>
      <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayback;
