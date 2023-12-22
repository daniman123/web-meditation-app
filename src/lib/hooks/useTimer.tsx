"use client";

import { useCallback, useEffect, useState } from "react";
import { logMeditation } from "../services/database/dataBaseManager";
import useAudioPlayer from "./useAudioPlayer";

const audioUrl = "/singing-bowl.mp3";

export const useTimer = (
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  initialSeconds: number,
  isRuntimePaused: boolean
) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const { isReady, loadAudio, playAudio } = useAudioPlayer(audioUrl);

  const updateSeconds = useCallback(() => {
    setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  }, []);

  useHandleInterval(loadAudio, isActive, updateSeconds, isRuntimePaused);

  useEffect(() => {
    if (seconds <= 0) {
      console.log("Timer has finished or reset.");
      logMeditation(initialSeconds);
      setIsActive(false);
      if (isReady) {
        playAudio();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, setIsActive, initialSeconds]);

  return [seconds, setSeconds] as const;
};

const useHandleInterval = (
  loadAudio: () => Promise<void>,
  isActive: boolean,
  updateSeconds: () => void,
  isRuntimePaused: boolean
) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let interval: NodeJS.Timeout;
    if (isActive && !isRuntimePaused) {
      loadAudio().then(() => {
        interval = setInterval(updateSeconds, 1000);
      });
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, updateSeconds, isRuntimePaused]);
};
