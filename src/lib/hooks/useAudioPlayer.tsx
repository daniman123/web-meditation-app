import { useEffect, useRef } from "react";

const useAudioPlayer = (
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  setIsRuntimePaused: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const soundEffect = useRef<HTMLAudioElement>();

  useEffect(() => {
    soundEffect.current = new Audio();
    soundEffect.current.autoplay = true;
    soundEffect.current.src =
      "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    soundEffect.current

      return () => {
      soundEffect.current = undefined;
    };
  }, []);

  const toggleTimer = async () => {
    if (soundEffect.current) {
      try {
        await soundEffect.current.play();
      } catch (error) {
        console.log(
          "🚀 ~ file: useAudioPlayer.tsx:23 ~ toggleTimer ~ error:",
          error
        );
      }
      setIsActive(!isActive);
      setIsRuntimePaused(false);
    }
  };

  return { soundEffect, toggleTimer };
};

export default useAudioPlayer;
