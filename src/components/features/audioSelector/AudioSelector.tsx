import StyledButton from "@/components/ui/styledButton/StyledButton";
import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import React from "react";
import { useAudioSelectorContext } from "../audioContextProvider/AudioContextProvider";

export const RenderArray = ({
  dataArray,
  setValue,
}: {
  dataArray: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) =>
  dataArray.map((value, index) => (
    <StyledButton
      key={index}
      wrapperStyles="flex justify-center"
      buttonStyles="w-28 p-2 rounded-3xl bg-emerald-500 text-white opacity-90 hover:opacity-100 transition-opacity"
      buttonLabel={value}
      handleClick={() => setValue(value)}
    />
  ));

export const AudioSelector = () => {
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

  const selectionTypes = [
    {
      configTitle: "Select Category",
      dataArray: categories,
      setValue: setCategory,
      displayConfig: category,
      showIndex: !category && !speaker && !duration,
    },
    {
      configTitle: "Select Speaker",
      dataArray: speakers,
      setValue: setSpeaker,
      displayConfig: speaker,
      showIndex: category && !speaker && !duration,
    },
    {
      configTitle: "Select Duration",
      dataArray: durations,
      setValue: setDuration,
      displayConfig: duration,
      showIndex: category && speaker && !duration,
    },
  ];
  if (category && speaker && duration) return;
  return (
    <div className="grid gap-3 font-semibold">
      {selectionTypes.map((value, index) => (
        <React.Fragment key={index}>
          {value.showIndex && (
            <>
              <TitleBanner title={value.configTitle} fontSize="text-2xl" />
              <RenderArray
                dataArray={value.dataArray}
                setValue={value.setValue}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AudioSelector;
