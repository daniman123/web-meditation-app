import { useEffect, useRef, useState } from "react";
import useAudioControl from "./useAudioControl";
import useAudioEvents from "./useAudioEvents";
import { logMeditation } from "@/lib/services/database/dataBaseManager";

const useAudioPlayback = (src: string) => {
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;
  }, [src]);

  const { isPlaying, togglePlayPause, handleSeek } = useAudioControl(audioRef);
  useAudioEvents(audioRef, setDuration, setCurrentTime, logMeditation);

  return {
    isPlaying,
    duration,
    currentTime,
    togglePlayPause,
    handleSeek,
  };
};

export default useAudioPlayback;
