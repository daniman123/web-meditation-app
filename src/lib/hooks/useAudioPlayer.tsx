import { useEffect, useRef, useState } from "react";
import { logMeditation } from "../services/database/dataBaseManager";

const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const [src, setSrc] = useState<string | undefined>();
  const [speaker, setSpeaker] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const toggleRuntime = async () => {
    const audio = audioRef.current;
    if (audio) {
      if (!isPaused) {
        audio.pause();
      } else {
        await audio.play();
      }
      setIsPaused(!isPaused);
    }
  };

  const resetAudioPlayer = () => {
    setSrc(undefined);
    audioRef.current = undefined;
    setSpeaker(undefined);
    setCategory(undefined);

    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setDuration(0);
  };

  useEffect(() => {
    if (!src) return;

    audioRef.current = new Audio(src);
    const audio = audioRef.current;

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      console.log(audio.duration);
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", onLoadedMetadata);
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleAudioEnded);
      audioRef.current = undefined;
      audio.src = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 1000);
    }
  };

  const handleAudioEnded = () => {
    logMeditation(audioRef.current?.duration as number);
    resetAudioPlayer();
  };

  return {
    togglePlayPause,
    progress,
    duration,
    isPlaying,
    isPaused,
    toggleRuntime,
    setSrc,
    speaker,
    setSpeaker,
    resetAudioPlayer,
    category,
    setCategory,
  };
};

export default useAudioPlayer;
