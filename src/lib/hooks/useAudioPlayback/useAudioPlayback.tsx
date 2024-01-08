import { logMeditation } from "@/lib/services/database/dataBaseManager";
import { useEffect, useRef, useState } from "react";

const useAudioPlayback = (src: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });
    audio.addEventListener("ended", () => {
      logMeditation(duration);
    });
    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
      audio.removeEventListener("ended", () => {});
    };
  }, [src, duration]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    const audio = audioRef.current;

    const seekTime = (audio.duration / 100) * time;

    if (seekTime > audio.duration) {
      const resetTime = seekTime - audio.duration;
      audio.currentTime = resetTime;
      setCurrentTime(resetTime);
    } else {
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  return {
    isPlaying,
    duration,
    currentTime,
    togglePlayPause,
    handleSeek,
  };
};

export default useAudioPlayback;
