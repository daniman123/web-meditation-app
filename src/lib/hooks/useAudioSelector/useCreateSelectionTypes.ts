import { useMemo } from "react";

export interface IcreateSelectionType {
  configTitle: string;
  dataArray: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  showIndex: boolean;
}

/**
 * Custom hook to create selection types based on provided criteria.
 */
const useCreateSelectionTypes = (
  selectionState: {
    category: string;
    speaker: string;
    duration: string;
  },
  selectionData: {
    categories: string[];
    speakers: string[];
    durations: string[];
  },
  setSelection: {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    setSpeaker: React.Dispatch<React.SetStateAction<string>>;
    setDuration: React.Dispatch<React.SetStateAction<string>>;
  }
) => {
  const { category, speaker, duration } = selectionState;
  const { categories, speakers, durations } = selectionData;
  const { setCategory, setSpeaker, setDuration } = setSelection;

  const createSelectionType = (
    title: string,
    dataArray: string[],
    setValue: React.Dispatch<React.SetStateAction<string>>,
    showIndex: string | boolean
  ) => ({
    configTitle: title,
    dataArray,
    setValue,
    showIndex,
  });

  return useMemo(
    () => [
      createSelectionType(
        "Select Category",
        categories,
        setCategory,
        !category && !speaker && !duration
      ),
      createSelectionType(
        "Select Speaker",
        speakers,
        setSpeaker,
        category && !speaker && !duration
      ),
      createSelectionType(
        "Select Duration",
        durations,
        setDuration,
        category && speaker && !duration
      ),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, speaker, duration, categories, speakers, durations]
  );
};

export default useCreateSelectionTypes;
