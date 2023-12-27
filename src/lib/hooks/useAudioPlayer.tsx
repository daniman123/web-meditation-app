import { useEffect, useRef, useState } from "react";

const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const [src, setSrc] = useState<string | undefined>();
  const [speaker, setSpeaker] = useState<string | undefined>();

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
    audioRef.current = undefined;
    setSrc(undefined);
    setSpeaker(undefined);

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
    };

    if (audio) {
      audio.addEventListener("loadedmetadata", onLoadedMetadata);

      audio.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
        resetAudioPlayer();
      }
      audioRef.current = undefined;
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src]);

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 1000);
    }
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
  };
};

export default useAudioPlayer;
