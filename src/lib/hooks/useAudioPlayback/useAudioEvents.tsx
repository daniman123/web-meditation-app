import React, { useEffect } from "react";

type AudioEventHandlers = {
  handleLoadedMetadata: () => void;
  handleTimeUpdate: () => void;
  handleAudioEnded: () => void;
  handleError: () => void;
};

type LogDurationFunction = (_duration: number) => void;

import { throttle } from "lodash";
import ReactDOM from "react-dom";

const manageEventListeners = (
  audio: HTMLAudioElement,
  eventHandlers: AudioEventHandlers
) => {
  audio.addEventListener("loadedmetadata", eventHandlers.handleLoadedMetadata);
  audio.addEventListener("timeupdate", eventHandlers.handleTimeUpdate);
  audio.addEventListener("ended", eventHandlers.handleAudioEnded);
  audio.addEventListener("error", eventHandlers.handleError);

  return () => {
    audio.removeEventListener(
      "loadedmetadata",
      eventHandlers.handleLoadedMetadata
    );
    audio.removeEventListener("timeupdate", eventHandlers.handleTimeUpdate);
    audio.removeEventListener("ended", eventHandlers.handleAudioEnded);
    audio.removeEventListener("error", eventHandlers.handleError);
  };
};

// const handleError = (error: ErrorEvent) => {
//   // Log the error to the console
//   console.error("Audio playback error:", error.message);
//   // Implement UI update or recovery strategy here
// };

const createEventHandlers = (
  audio: HTMLAudioElement,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
  logDuration: LogDurationFunction,
  reset: () => void
): AudioEventHandlers => {
  return {
    handleLoadedMetadata: () => setDuration(audio.duration),
    handleTimeUpdate: throttle(() => {
      setCurrentTime(audio.currentTime);
    }, 1000), // Adjust the throttle duration as needed
    // handleTimeUpdate: () => setCurrentTime(audio.currentTime),
    handleAudioEnded: () => {
      ReactDOM.unstable_batchedUpdates(() => {
        logDuration(audio.duration);
        setDuration(0);
        setCurrentTime(0);
        reset();
      });
    },

    handleError: () => {
      console.error("Error in audio playback");
      // handleError(e)
      reset();
    },
  };
};

const useAudioEvents = (
  audioRef: React.RefObject<HTMLAudioElement>,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
  logMeditation: LogDurationFunction,
  reset: () => void
) => {
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const eventHandlers = createEventHandlers(
      audio,
      setDuration,
      setCurrentTime,
      logMeditation,
      reset
    );

    audio.addEventListener(
      "loadedmetadata",
      eventHandlers.handleLoadedMetadata
    );
    audio.addEventListener("timeupdate", eventHandlers.handleTimeUpdate);
    audio.addEventListener("ended", eventHandlers.handleAudioEnded);
    audio.addEventListener("error", eventHandlers.handleError);

    return () => {
      audio.removeEventListener(
        "loadedmetadata",
        eventHandlers.handleLoadedMetadata
      );
      audio.removeEventListener("timeupdate", eventHandlers.handleTimeUpdate);
      audio.removeEventListener("ended", eventHandlers.handleAudioEnded);
      audio.removeEventListener("error", eventHandlers.handleError);
    };
  }, [audioRef, setDuration, setCurrentTime, logMeditation, reset]);
};

export const useAudioEventss = (
  audioRef: React.RefObject<HTMLAudioElement>,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
  logMeditation: LogDurationFunction,
  reset: () => void
) => {
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const eventHandlers = createEventHandlers(
      audio,
      setDuration,
      setCurrentTime,
      logMeditation,
      reset
    );
    const cleanupListeners = manageEventListeners(audio, eventHandlers);

    return cleanupListeners;
  }, [audioRef, setDuration, setCurrentTime, logMeditation, reset]);
};

export default useAudioEvents;
