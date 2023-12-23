"use client";

import { MutableRefObject, useCallback } from "react";
import useDurationExpired from "./useDurationExpired";
import useHandleInterval from "./useHandleInterval";
import useTimeStartDuration from "./useTimeStartDuration";

export const useTimer = (
  soundEffect: MutableRefObject<HTMLAudioElement | undefined>,
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  duration: number,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  isRuntimePaused: boolean
) => {
  const loggedStartDuration = useTimeStartDuration(isActive, duration);

  const updateSeconds = useCallback(() => {
    setDuration((prevState) => (prevState > 0 ? prevState - 1 : 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useHandleInterval(isActive, updateSeconds, isRuntimePaused);

  useDurationExpired(
    duration,
    setDuration,
    loggedStartDuration as number,
    setIsActive,
    soundEffect
  );
};
