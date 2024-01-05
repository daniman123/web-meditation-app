import RadioButtons from "@/components/ui/radioButtons/RadioButtons";
import RenderDurationOptions from "@/components/ui/renderDurationOptions/RenderDurationOptions";
import StyledButton from "@/components/ui/styledButton/StyledButton";
import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import { IaudioRoutesData } from "@/lib/services/audioFileManager/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface IConfigureMeditation {
  isPlaying: boolean;
  isPaused: boolean;
  audioFileRoutes: IaudioRoutesData;
  setSrc: Dispatch<SetStateAction<string | undefined>>;
  togglePlayPause: () => Promise<void>;
  speaker: string;
  setSpeaker: Dispatch<SetStateAction<string | undefined>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string | undefined>>;
}

const ConfigureMeditation = ({
  isPlaying,
  isPaused,
  speaker,
  audioFileRoutes,
  setSrc,
  togglePlayPause,
  setSpeaker,
  category,
  setCategory,
}: IConfigureMeditation) => {
  return (
    <>
      {!isPlaying && !isPaused && speaker ? (
        category ? (
          <>
            <TitleBanner fontSize="text-3xl" title="Select Duration" />
            <RenderDurationOptions
              audioFileRoutes={audioFileRoutes}
              setSrc={setSrc}
              speaker={speaker}
              category={category}
            />
            <StyledButton
              wrapperStyles="flex justify-center items-center"
              buttonStyles="w-24 h-24 p-3 rounded-full  text-white font-semibold"
              handleClick={togglePlayPause}
            >
              <div className="relative w-full h-full bg-white rounded-full">
                <Image
                  alt=""
                  src={"/play-button.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </StyledButton>
          </>
        ) : (
          <>
            <button onClick={() => setCategory("sleep")}>Sleep</button>
            <button onClick={() => setCategory("stress")}>Stress</button>
          </>
        )
      ) : (
        !speaker && (
          <>
            <TitleBanner fontSize="text-xl" title="Choose Speaker" />
            <RadioButtons
              selectedOption={speaker}
              setSelectedOption={setSpeaker}
            />
          </>
        )
      )}
    </>
  );
};

export default ConfigureMeditation;
