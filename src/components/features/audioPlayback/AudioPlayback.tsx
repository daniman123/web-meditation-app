import PlayBackDisplay from "@/components/ui/playBackDisplay/PlayBackDisplay";
import StyledButton from "@/components/ui/styledButton/StyledButton";
import useAudioControl from "@/lib/hooks/useAudioPlayback/useAudioControl";
import useAudioEvents from "@/lib/hooks/useAudioPlayback/useAudioEvents";
import { logMeditation } from "@/lib/services/database/dataBaseManager";
import React, { useRef, useState } from "react";
import { useAudioSelectorContext } from "../audioContextProvider/AudioContextProvider";

export const AudioPlayback = () => {
  const audioRef = useRef<HTMLAudioElement | undefined>();
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const { audioSrc, resetSelections } = useAudioSelectorContext();

  const reset = () => {
    audioRef.current = undefined;
    resetSelections();
  };

  const { togglePlayPause, handleSeek, isPlaying } = useAudioControl(
    audioRef as React.MutableRefObject<HTMLAudioElement>
  );

  useAudioEvents(
    audioRef as React.MutableRefObject<HTMLAudioElement>,
    setDuration,
    setCurrentTime,
    logMeditation,
    reset
  );

  if (!audioSrc) return;
  return (
    <div className="">
      <audio
        ref={audioRef as React.MutableRefObject<HTMLAudioElement>}
        src={audioSrc}
      ></audio>

      <PlayBackDisplay
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
      />
      {isPlaying ? (
        <StyledButton
          wrapperStyles="flex justify-center"
          buttonStyles="w-28 p-2 rounded-3xl bg-emerald-500 text-white opacity-90 hover:opacity-100 transition-opacity"
          buttonLabel="Play"
          handleClick={togglePlayPause}
        />
      ) : (
        <StyledButton
          wrapperStyles="flex justify-center"
          buttonStyles="w-28 p-2 rounded-3xl bg-emerald-500 text-white opacity-90 hover:opacity-100 transition-opacity"
          buttonLabel="Pause"
          handleClick={togglePlayPause}
        />
      )}

      <StyledButton
        wrapperStyles="flex justify-center"
        buttonStyles="w-28 p-2 rounded-3xl bg-emerald-500 text-white opacity-90 hover:opacity-100 transition-opacity"
        buttonLabel="Reset"
        handleClick={reset}
      />
    </div>
  );
};

export default AudioPlayback;
