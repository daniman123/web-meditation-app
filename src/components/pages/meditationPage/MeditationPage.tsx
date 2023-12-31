"use client";

import AudioSelector from "@/components/features/audioSelector/AudioSelector";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";

export interface IMeditationPage {}

const MeditationPage = () => {
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />
      <AudioSelector />
    </section>
  );
};

export default MeditationPage;
