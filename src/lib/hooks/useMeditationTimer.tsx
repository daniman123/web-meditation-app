import { useState } from "react";
import { useTimer } from "./useTimer";

const useMeditationTimer = () => {
  const soundEffect = new Audio();
  soundEffect.autoplay = true;
  soundEffect.src =
    "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";

  const [selectedSeconds, setSelectedSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isRuntimePaused, setIsRuntimePaused] = useState(false);
  const [seconds, setSeconds] = useTimer(
    soundEffect,
    isActive,
    setIsActive,
    selectedSeconds,
    isRuntimePaused
  );

  const toggleTimer = () => {
    soundEffect.play().then(() => {
      setIsActive(!isActive);
      setIsRuntimePaused(false);
    });
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
