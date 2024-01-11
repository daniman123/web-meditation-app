import React from 'react';
import RadioButtonGroup from "@/components/ui/radioButtons/RadioButtons";
import useAudioSelector from "@/lib/hooks/useAudioSelector/useAudioSelector";
import AudioPlayback from "../audioPlayback/AudioPlayback";
import DurationSelector from "./components/DurationSelector";

const AudioSelector: React.FC = () => {
  const {
    audioSrc,
    categories,
    category,
    duration,
    durations,
    handleCategoryChange,
    handleDurationChange,
    handleSpeakerChange,
    speaker,
    speakers,
  } = useAudioSelector();

  const renderSelectors = (): JSX.Element | null => {
    if (!category) {
      return <RadioButtonGroup options={categories} handleOptionChange={handleCategoryChange} selectedOption={category} />;
    }
    if (!speaker) {
      return <RadioButtonGroup options={speakers} handleOptionChange={handleSpeakerChange} selectedOption={speaker} />;
    }
    if (!duration) {
      return <DurationSelector duration={duration} durations={durations} handleDurationChange={handleDurationChange} speaker={speaker} />;
    }
    return null;
  };

  return (
    <div className="grid">
      {renderSelectors()}
      {audioSrc && <AudioPlayback src={audioSrc} />}
    </div>
  );
};

export default AudioSelector;
