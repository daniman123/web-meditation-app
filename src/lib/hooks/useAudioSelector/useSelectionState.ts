// useSelectionState.ts
import { useAudioSelectorContext } from "@/components/features/audioContextProvider/AudioContextProvider";
import { useCallback } from "react";

export interface IuseSelectionState {
  selectionData: {
    categories: string[];
    speakers: string[];
    durations: string[];
  };
  selectionState: {
    category: string;
    speaker: string;
    duration: string;
  };
  setSelection: {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    setSpeaker: React.Dispatch<React.SetStateAction<string>>;
    setDuration: React.Dispatch<React.SetStateAction<string>>;
  };
}

/**
 * Custom hook to manage audio selection states and provide utility functions.
 */
const useSelectionState = () => {
  const {
    category,
    speaker,
    duration,
    setCategory,
    setDuration,
    setSpeaker,
    categories,
    durations,
    speakers,
  } = useAudioSelectorContext();

  const isAllSelected = useCallback(
    () => category && speaker && duration,
    [category, speaker, duration]
  );

  return {
    selectionData: {
      categories,
      speakers,
      durations,
    },
    selectionState: {
      category,
      speaker,
      duration,
    },
    setSelection: {
      setCategory,
      setSpeaker,
      setDuration,
    },
    isAllSelected,
  };
};

export default useSelectionState;
