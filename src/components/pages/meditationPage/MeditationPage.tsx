"use client";

import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";

import { AudioPlayerProvider } from "@/components/features/audioPlayerProvider/AudioPlayerProvider";
import ConfigureMeditation from "@/components/features/configureMeditation/ConfigureMeditation";
import MeditationRuntime from "@/components/features/meditationRuntime/MeditationRuntime";
import audioFileRoutes from "../../../lib/services/audioFileManager/audioRoutes.json";

export interface IMeditationPage {}

const MeditationPage = () => {
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />
      <AudioPlayerProvider>
        <MeditationRuntime />
        <ConfigureMeditation audioFileRoutes={audioFileRoutes} />
      </AudioPlayerProvider>
    </section>
  );
};

export default MeditationPage;
