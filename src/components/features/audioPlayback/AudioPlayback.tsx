import useAudioPlayback from "@/lib/hooks/useAudioPlayback/useAudioPlayback";
import useSeekBarInteraction from "@/lib/hooks/useSeekBarInteraction";
import { formatTime } from "@/lib/utils";
import { useEffect, useMemo } from "react";

export interface IAudioPlayback {
  src: string;
}

const AudioPlayback = ({ src }: IAudioPlayback) => {
  const { currentTime, duration, handleSeek, isPlaying, togglePlayPause } =
    useAudioPlayback(src);

  const radius = 100;
  const circumference = 2 * Math.PI * radius;

  const { angle, handleMouseEvent, setAngle } =
    useSeekBarInteraction(handleSeek);

  useEffect(() => {
    setAngle((currentTime / duration) * 100);
  }, [currentTime, duration, setAngle]);

  const strokeDashoffset = useMemo(
    () => circumference - (angle / 100) * circumference,
    [angle, circumference]
  );

  const renderPlaybackUI = () => (
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
      <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );

  return renderPlaybackUI();
};

export default AudioPlayback;
