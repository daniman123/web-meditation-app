import useAudioSelector from "@/lib/hooks/useAudioSelector/useAudioSelector";
import { useAudioData } from "@/lib/hooks/useAudioSelector/utils";
import { createContext, useContext, useState } from "react";

interface IcontextValue {
  audioSrc: string;
  setAudioSrc: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  speaker: string;
  setSpeaker: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  speakers: string[];
  durations: string[];
  resetSelections: () => void;
}

export const AudioSelectorContext = createContext<IcontextValue | null>(null);

const AudioContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [audioSrc, setAudioSrc] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [speaker, setSpeaker] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const { categories, speakers, durations } = useAudioData(category, speaker);

  useAudioSelector(setAudioSrc, category, speaker, duration);

  const resetSelections = () => {
    setAudioSrc("");
    setCategory("");
    setSpeaker("");
    setDuration("");
  };

  const contextValue: IcontextValue = {
    audioSrc,
    setAudioSrc,
    category,
    setCategory,
    speaker,
    setSpeaker,
    duration,
    setDuration,
    categories,
    durations,
    speakers,
    resetSelections,
  };

  return (
    <AudioSelectorContext.Provider value={contextValue}>
      {children}
    </AudioSelectorContext.Provider>
  );
};

const useAudioSelectorContext = () => {
  const context = useContext(AudioSelectorContext);
  if (!context) {
    throw new Error(
      "useAudioSelectorContext must be used within a AudioContextProvider"
    );
  }
  return context;
};

export { AudioContextProvider, useAudioSelectorContext };
