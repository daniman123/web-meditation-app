import { useEffect } from "react";
import { logMeditation } from "../services/database/dataBaseManager";

const useDurationExpired = (
  duration: number,
  setDuration: React.Dispatch<React.SetStateAction<number>>,
  loggedStartDuration: number,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  soundEffect: React.MutableRefObject<HTMLAudioElement | undefined>
) => {
  useEffect(() => {
    if (duration === 0  ) {
      logMeditation(loggedStartDuration);

      setIsActive(false);
      if (soundEffect.current) {
        soundEffect.current.src = "/singing-bowl.wav";
        soundEffect.current.play().then();
      }
      setDuration(loggedStartDuration as number);
      return () => {};
    }
  }, [duration, loggedStartDuration, setDuration, setIsActive, soundEffect]);
};

export default useDurationExpired;