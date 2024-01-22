import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import React, { useMemo } from "react";
import { useAudioSelectorContext } from "../audioContextProvider/AudioContextProvider";
import RenderArray from "./components/RenderArray";

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

const isAllSelected = (category: string, speaker: string, duration: string) =>
  category && speaker && duration;

const AudioSelector: React.FC = () => {
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

  const selectionTypes = useMemo(
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

  if (isAllSelected(category, speaker, duration)) return null;

  return (
    <div className="grid gap-3 font-semibold">
      {selectionTypes.map(
        ({ configTitle, dataArray, setValue, showIndex }) =>
          showIndex && (
            <React.Fragment key={configTitle}>
              <TitleBanner title={configTitle} fontSize="text-2xl" />
              <RenderArray dataArray={dataArray} setValue={setValue} />
            </React.Fragment>
          )
      )}
    </div>
  );
};

export default React.memo(AudioSelector);
