import { useCallback, useRef } from "react";

const useAudioPlayer = (src: string) => {
  const audioRef = useRef(new Audio(src));

  const playAudio = useCallback(() => {
    audioRef.current.play();
  }, []);

  return playAudio;
};

export default useAudioPlayer;
