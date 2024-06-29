"use client";

import MeditationContent from "@/components/features/meditationContent/MeditationContent";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";

const MeditationPage = () => {
  return (
    // <section className="h-[100dvh] w-[100dvw] animate-gradientShift">
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-home-screen grid grid-rows-[.6fr_1.2fr_1.2fr]">
      <ReturnHomeButton />
      <MeditationContent />
    </section>
  );
};
export default MeditationPage;
