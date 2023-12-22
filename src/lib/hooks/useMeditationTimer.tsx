"use client";

import { useEffect, useRef, useState } from "react";
import { useTimer } from "./useTimer";

const useMeditationTimer = () => {
  const soundEffect = useRef<HTMLAudioElement>();

  useEffect(() => {
    soundEffect.current = new Audio();
    soundEffect.current.autoplay = true;
    soundEffect.current.src =
      "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
  }, []);

  const [selectedSeconds, setSelectedSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isRuntimePaused, setIsRuntimePaused] = useState(false);

  const toggleTimer = async () => {
    if (soundEffect.current) {
      await soundEffect.current.play();
      setIsActive(!isActive);
      setIsRuntimePaused(false);
    }
  };

  const [seconds, setSeconds] = useTimer(
    soundEffect,
    isActive,
    setIsActive,
    selectedSeconds,
    isRuntimePaused
  );

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
