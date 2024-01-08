import RadioButton from "@/components/ui/radioButtons/components/RadioButton";
import useAudioSelector from "@/lib/hooks/useAudioSelector/useAudioSelector";
import AudioPlayback from "../audioPlayback/AudioPlayback";

export interface IRadioButtonGroup {
  options: string[];
  handleOptionChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

const RadioButtonGroup = ({
  options,
  handleOptionChange,
  selectedOption,
}: IRadioButtonGroup) => (
  <>
    {options.map((option) => (
      <RadioButton
        key={option}
        handleOptionChange={handleOptionChange}
        label={option}
        selectedOption={selectedOption}
        value={option}
      />
    ))}
  </>
);

export interface IAudioSelector {}

const AudioSelector = () => {
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

  return (
    <div className="grid">
      {!category && (
        <RadioButtonGroup
          options={categories}
          handleOptionChange={handleCategoryChange}
          selectedOption={category}
        />
      )}

      {category && !speaker && (
        <RadioButtonGroup
          options={speakers}
          handleOptionChange={handleSpeakerChange}
          selectedOption={speaker}
        />
      )}

      {category && speaker && (
        <select
          value={duration}
          onChange={handleDurationChange}
          disabled={!speaker}
        >
          <option value="">Select Duration</option>
          {durations.map((dur) => (
            <option key={dur} value={dur}>
              {dur}
            </option>
          ))}
        </select>
      )}

      

      {audioSrc && <AudioPlayback src={audioSrc} />}
    </div>
  );
};

export default AudioSelector;
