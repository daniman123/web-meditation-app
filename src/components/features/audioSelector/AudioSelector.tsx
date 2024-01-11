import RadioButtonGroup from "@/components/ui/radioButtons/RadioButtons";
import useAudioSelector from "@/lib/hooks/useAudioSelector/useAudioSelector";
import { useValueState } from "@/lib/hooks/useAudioSelector/useValueState";
import { useAudioData } from "@/lib/hooks/useAudioSelector/utils";
import React from "react";
import withDataRenderer from "../withDataRenderer/WithDataRenderer";
import DurationSelector from "./components/DurationSelector";

const CategorySelector = ({
  categories,
  handleCategoryChange,
  category,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[];
  category: string;
  handleCategoryChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
}) =>
  !category ? (
    <RadioButtonGroup
      options={categories}
      handleOptionChange={handleCategoryChange}
      selectedOption={category}
    />
  ) : null;

export const Duration = ({
  duration,
  durations,
  handleDurationChange,
  speaker,
}: {
  speaker: string;
  duration: string;
  durations: string[];
  handleDurationChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
}) =>
  !duration && speaker ? (
    <DurationSelector
      duration={duration}
      durations={durations}
      handleDurationChange={handleDurationChange}
      speaker={speaker}
    />
  ) : null;

const EnhancedComponent = withDataRenderer(CategorySelector);

const AudioSelector = ({
  setAudioSrc,
}: {
  setAudioSrc: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { value: category, handleValueChange: handleCategoryChange } =
    useValueState();
  const { value: speaker, handleValueChange: handleSpeakerChange } =
    useValueState();
  const { value: duration, handleValueChange: handleDurationChange } =
    useValueState();

  useAudioSelector(setAudioSrc, category, speaker, duration);

  const { categories, speakers, durations } = useAudioData(category, speaker);

  const dataArray = [
    {
      category,
      categories,
      handleCategoryChange,
    },
    {
      category: speaker,
      categories: speakers,
      handleCategoryChange: handleSpeakerChange,
    },
  ];

  return (
    <div className="grid">
      <EnhancedComponent dataArray={dataArray} />
      <Duration
        duration={duration}
        durations={durations}
        handleDurationChange={handleDurationChange}
        speaker={speaker}
      />
    </div>
  );
};

export default AudioSelector;
