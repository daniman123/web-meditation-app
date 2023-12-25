"use client"

import CountDownTimer from "@/components/ui/countDownTimer/CountDownTimer";
import { useEffect, useRef, useState } from "react";

export interface IAudioPlayer {}

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    audioRef.current = new Audio("/audio/Final_JonKabat-Zinn.wav");
    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
      }
      audioRef.current = undefined;
    };
  }, []);

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 1000);
    }
  };

  return (
    <div className="w-full h-1/2">
      <CountDownTimer
        initialTime={audioRef.current?.duration as number}
        timeLeft={progress as number}
      />
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
