"use client";

import { useCallback, useEffect, useState } from "react";
import { logMeditation } from "../services/database/dataBaseManager";

// const audioUrl = "/singing-bowl.wav";

export const useTimer = (
  soundEffect: HTMLAudioElement,
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  initialSeconds: number,
  isRuntimePaused: boolean
) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  // const { isReady, loadAudio, playAudio } = useAudioPlayer(audioUrl);

  const updateSeconds = useCallback(() => {
    setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  }, []);

  useHandleInterval(isActive, updateSeconds, isRuntimePaused);

  useEffect(() => {
    if (seconds <= 0) {
      console.log("Timer has finished or reset.");
      logMeditation(initialSeconds);
      setIsActive(false);

      soundEffect.src = "/singing-bowl.wav";
      soundEffect.play().then();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, setIsActive, initialSeconds]);

  return [seconds, setSeconds] as const;
};

const useHandleInterval = (
  isActive: boolean,
  updateSeconds: () => void,
  isRuntimePaused: boolean
) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout;
    if (isActive && !isRuntimePaused) {
      interval = setInterval(updateSeconds, 1000);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, updateSeconds, isRuntimePaused]);
};
