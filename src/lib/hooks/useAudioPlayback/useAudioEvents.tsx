import { useEffect } from "react";

const createEventHandlers = (
  audio: HTMLAudioElement,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
  logDuration: first
) => ({
  handleLoadedMetadata: () => setDuration(audio.duration),
  handleTimeUpdate: () => setCurrentTime(audio.currentTime),
  handleAudioEnded: () => logDuration(audio.duration),
});

export type first = (_duration: number) => void; 

const useAudioEvents = (
  audioRef: React.RefObject<HTMLAudioElement>,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
  logMeditation: first
) => {
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const { handleLoadedMetadata, handleTimeUpdate, handleAudioEnded } =
      createEventHandlers(audio, setDuration, setCurrentTime, logMeditation);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, [audioRef, setDuration, setCurrentTime, logMeditation]);
};

export default useAudioEvents;
