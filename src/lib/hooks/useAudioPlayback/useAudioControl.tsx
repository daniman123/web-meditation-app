import { useCallback, useState } from "react";
import { pauseAudio, playAudio, seekAudio } from "./utils";

const useAudioControl = (audioRef: React.RefObject<HTMLAudioElement>) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      pauseAudio(audio);
      setIsPlaying(true);
    } else {
      playAudio(audio);
      setIsPlaying(false);
    }
  }, [audioRef]);

  const handleSeek = useCallback(
    (time: number) => {
      const audio = audioRef.current;
      if (!audio) return;

      seekAudio(audio, time);
    },
    [audioRef]
  );

  return { isPlaying, togglePlayPause, handleSeek };
};

export default useAudioControl;
