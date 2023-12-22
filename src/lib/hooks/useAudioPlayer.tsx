import { useState } from "react";

const useAudioPlayer = (audioFile: string) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [buffer, setBuffer] = useState<AudioBuffer | null>(null);
  const [isReady, setIsReady] = useState(false);

  const loadAudio = async () => {
    // @ts-ignore: Unreachable code erro
    const context = new window.AudioContext() || window.webkitAudioContext();
    const response = await fetch(audioFile);
    const arrayBuffer = await response.arrayBuffer();
    context.decodeAudioData(arrayBuffer, (audioBuffer) => {
      setBuffer(audioBuffer);
      setIsReady(true);
    });
    setAudioContext(context);
  };

  const playAudio = () => {
    if (audioContext && buffer) {
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start();
    }
  };

  return { loadAudio, playAudio, isReady };
};

export default useAudioPlayer;
