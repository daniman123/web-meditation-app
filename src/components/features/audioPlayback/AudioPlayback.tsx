import PlayPauseButton from "@/components/ui/playPauseButton/PlayPauseButton";
import StyledButton from "@/components/ui/styledButton/StyledButton";
import TimeDisplay from "@/components/ui/timeDisplay/TimeDisplay";
import useAudioPlaybackState from "@/lib/hooks/useAudioPlayback/useAudioPlayback";
import { FC } from "react";

const AudioPlayback: FC = () => {
  const {
    audioRef,
    duration,
    currentTime,
    isPlaying,
    togglePlayPause,
    reset,
    audioSrc,
  } = useAudioPlaybackState();

  if (!audioSrc) return null;

  return (
    <div className="audio-playback">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      <PlayPauseButton
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />
      <StyledButton
        wrapperStyles="flex justify-center mt-4"
        buttonStyles="w-32 p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
        buttonLabel="Reset"
        handleClick={reset}
      />
      <TimeDisplay currentTime={currentTime} duration={duration} />
    </div>
  );
};

export default AudioPlayback;
