import PlayButton from "@/components/ui/audioControls/PlayButton";
import RenderDurationOptions from "@/components/ui/renderDurationOptions/RenderDurationOptions";
import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import TitledRadioButtons from "@/components/ui/titledRadioButtons/TitledRadioButtons";
import { useAudioPlayerContext } from "../audioPlayerProvider/AudioPlayerProvider";

const ConfigureMeditation = () => {
  const {
    isPlaying,
    isPaused,
    speaker,
    setSrc,
    togglePlayPause,
    setSpeaker,
    category,
    setCategory,
  } = useAudioPlayerContext();

  const dataCategory = [
    {
      value: "sleep",
      label: "Sleep",
    },
    {
      value: "stress",
      label: "Stress",
    },
  ];

  const dataSpeaker = [
    {
      value: "JKZ",
      label: "Jon Kabbat-Zinn",
    },
    {
      value: "AP",
      label: "Andy Puddicombe",
    },
  ];

  return (
    <>
      {!isPlaying && !isPaused && speaker ? (
        category ? (
          <>
            <TitleBanner fontSize="text-3xl" title="Select Duration" />
            <RenderDurationOptions
              setSrc={setSrc}
              speaker={speaker}
              category={category}
            />

            <PlayButton toggleRuntime={togglePlayPause} />
          </>
        ) : (
          <TitledRadioButtons
            title="Select Category"
            data={dataCategory}
            selectedOption={category}
            setSelectedOption={setCategory}
          />
        )
      ) : (
        !speaker && (
          <TitledRadioButtons
            title="Choose Speaker"
            data={dataSpeaker}
            selectedOption={speaker}
            setSelectedOption={setSpeaker}
          />
        )
      )}
    </>
  );
};

export default ConfigureMeditation;
