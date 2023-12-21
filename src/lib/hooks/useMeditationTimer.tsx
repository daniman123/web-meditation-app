import { useState } from "react";
import { useTimer } from "./useTimer";

const useMeditationTimer = () => {
  const [selectedSeconds, setSelectedSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isRuntimePaused, setIsRuntimePaused] = useState(false);
  const [seconds, setSeconds] = useTimer(isActive, setIsActive, selectedSeconds, isRuntimePaused);

  const toggleTimer = () => {
    setIsActive(!isActive);
    setIsRuntimePaused(false);
  };

  const toggleActiveRuntime = () => {
    setIsRuntimePaused(!isRuntimePaused);
  };

  const resetTimer = () => {
    setSeconds(selectedSeconds);
    setIsActive(false);
    setIsRuntimePaused(false);
  };

  return {
    seconds,
    setSeconds,
    selectedSeconds,
    setSelectedSeconds,
    isActive,
    toggleTimer,
    resetTimer,
    toggleActiveRuntime,
    isRuntimePaused,
  };
};

export default useMeditationTimer;
