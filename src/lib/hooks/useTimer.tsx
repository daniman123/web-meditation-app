"use client";

import { MutableRefObject, useCallback, useEffect, useState } from "react";
import { logMeditation } from "../services/database/dataBaseManager";

export const useTimer = (
  soundEffect: MutableRefObject<HTMLAudioElement | undefined>,
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  initialSeconds: number,
  isRuntimePaused: boolean
) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const updateSeconds = useCallback(() => {
    setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  }, []);

  useHandleInterval(isActive, updateSeconds, isRuntimePaused);

  useEffect(() => {
    if (seconds <= 0) {
      console.log("Timer has finished or reset.");
      logMeditation(initialSeconds);
      setIsActive(false);
      if (soundEffect.current) {
        soundEffect.current.src = "/singing-bowl.wav";
        soundEffect.current.play().then();
      }
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
