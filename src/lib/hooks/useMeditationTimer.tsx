"use client";

import { useCallback, useState } from "react";
import useAudioPlayer from "../hooks/useAudioPlayer";
import useDurationExpired from "../hooks/useDurationExpired";
import useHandleInterval from "../hooks/useHandleInterval";
import useTimeStartDuration from "../hooks/useTimeStartDuration";

const useMeditationTimer = () => {
  const [duration, setDuration] = useState(5000);
  const [isActive, setIsActive] = useState(false);
  const [isRuntimePaused, setIsRuntimePaused] = useState(false);

  const { soundEffect, toggleTimer } = useAudioPlayer(
    isActive,
    setIsActive,
    setIsRuntimePaused
  );

  const loggedStartDuration = useTimeStartDuration(isActive, duration);

  const updateSeconds = useCallback(() => {
    setDuration((prevState) => (prevState > 0 ? prevState - 100 : 0));

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

  const toggleActiveRuntime = () => {
    setIsRuntimePaused(!isRuntimePaused);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsRuntimePaused(false);
    setDuration(loggedStartDuration as number);
  };

  return {
    duration,
    setDuration,
    isActive,
    toggleTimer,
    resetTimer,
    toggleActiveRuntime,
    isRuntimePaused,
    loggedStartDuration,
  };
};

export default useMeditationTimer;
