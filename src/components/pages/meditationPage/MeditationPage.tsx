"use client";

import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import useAudioPlayer from "@/lib/hooks/useAudioPlayer";

import ConfigureMeditation from "@/components/features/configureMeditation/ConfigureMeditation";
import MeditationRuntime from "@/components/features/meditationRuntime/MeditationRuntime";
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
    category,
    setCategory,
  } = useAudioPlayer();

  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />

      <MeditationRuntime
        isPlaying={isPlaying}
        duration={duration}
        progress={progress}
        toggleRuntime={toggleRuntime}
        resetAudioPlayer={resetAudioPlayer}
        isPaused={isPaused}
      />

      <ConfigureMeditation
        audioFileRoutes={audioFileRoutes}
        isPaused={isPaused}
        isPlaying={isPlaying}
        setSpeaker={setSpeaker}
        setSrc={setSrc}
        speaker={speaker as string}
        togglePlayPause={togglePlayPause}
        category={category as string}
        setCategory={setCategory}
      />
    </section>
  );
};

export default MeditationPage;
