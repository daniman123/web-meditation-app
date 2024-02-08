import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import useCreateSelectionTypes from "@/lib/hooks/useAudioSelector/useCreateSelectionTypes";
import useSelectionState from "@/lib/hooks/useAudioSelector/useSelectionState";
import React from "react";
import RenderArray from "./components/RenderArray";

/**
 * AudioSelector component for selecting audio attributes.
 */
const AudioSelector: React.FC = () => {
  const { selectionData, selectionState, setSelection, isAllSelected } =
    useSelectionState();
  const selectionTypes = useCreateSelectionTypes(
    selectionState,
    selectionData,
    setSelection
  );

  if (isAllSelected()) return null;

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
