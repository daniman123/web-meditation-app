import { useState } from "react";

export const useSpeakerState = () => {
  const [speaker, setSpeaker] = useState<string>("");

  const handleSpeakerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeaker(e.target.value);
  };

  return { speaker, handleSpeakerChange };
};
