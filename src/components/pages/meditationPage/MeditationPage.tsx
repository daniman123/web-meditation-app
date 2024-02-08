"use client"

import MeditationContent from "@/components/features/meditationContent/MeditationContent";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";

const MeditationPage = () => {
  return (
    <section className="h-[100dvh] w-[100dvw] animate-gradientShift">
      <ReturnHomeButton />
      <MeditationContent />
    </section>
  );
};
export default MeditationPage;
