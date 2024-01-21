import PlayPauseButton from "@/components/ui/playPauseButton/PlayPauseButton";
import StyledButton from "@/components/ui/styledButton/StyledButton";
import TimeDisplay from "@/components/ui/timeDisplay/TimeDisplay";
import useAudioControl from "@/lib/hooks/useAudioPlayback/useAudioControl";
import useAudioEvents from "@/lib/hooks/useAudioPlayback/useAudioEvents";
import { logMeditation } from "@/lib/services/database/dataBaseManager";
import { FC, useRef, useState } from "react";
import { useAudioSelectorContext } from "../audioContextProvider/AudioContextProvider";

export const AudioPlayback: FC = () => {
  // State and ref declarations
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Context and custom hooks
  const { audioSrc, resetSelections } = useAudioSelectorContext();
  const { togglePlayPause } = useAudioControl(audioRef, setIsPlaying);

  // Function to reset audio and selections
  const reset = () => {
    if (audioRef.current) {
      setIsPlaying(false);
      setCurrentTime(0);
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    resetSelections();
  };

  useAudioEvents(audioRef, setDuration, setCurrentTime, logMeditation, reset);

  // Early return if no audio source
  if (!audioSrc) return null;

  // JSX for the audio player UI
  return (
    <div>
      <audio ref={audioRef} src={audioSrc} />

      <PlayPauseButton
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />

      <StyledButton
        wrapperStyles="flex justify-center p-3"
        buttonStyles="w-28 p-2 rounded-3xl bg-emerald-500 text-white opacity-90 hover:opacity-100 transition-opacity"
        buttonLabel="Reset"
        handleClick={reset}
      />
      <TimeDisplay currentTime={currentTime} duration={duration} />
    </div>
  );
};

export default AudioPlayback;
