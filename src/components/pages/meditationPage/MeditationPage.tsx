"use client";

import RenderDurationOptions from "@/components/ui/renderDurationOptions/RenderDurationOptions";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import useAudioPlayer from "@/lib/hooks/useAudioPlayer";

import MeditationRuntime from "@/components/features/meditationRuntime/MeditationRuntime";
import RadioButtons from "@/components/ui/radioButtons/RadioButtons";
import StyledButton from "@/components/ui/styledButton/StyledButton";
import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import Image from "next/image";
import audioFileRoutes from "../../../lib/services/audioFileManager/audioRoutes.json";

export interface IMeditationPage {}

const MeditationPage = () => {
  const {
    togglePlayPause,
    progress,
    duration,
    isPlaying,
    isPaused,
    toggleRuntime,
    setSrc,
    speaker,
    setSpeaker,
    resetAudioPlayer,
  } = useAudioPlayer();

  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />
      {isPlaying && (
        <MeditationRuntime
          duration={duration}
          progress={progress}
          toggleRuntime={toggleRuntime}
          resetAudioPlayer={resetAudioPlayer}
          isPaused={isPaused}
        />
      )}
      {!isPlaying && !isPaused && speaker ? (
        <>
          <TitleBanner fontSize="text-3xl" title="Select Duration" />
          <RenderDurationOptions
            audioFileRoutes={audioFileRoutes}
            setSrc={setSrc}
            speaker={speaker}
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
    </section>
  );
};

export default MeditationPage;
