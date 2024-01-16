"use client";

import MeditationContent from "@/components/features/meditationContent/MeditationContent";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import React from "react";

export interface IMeditationPage {}

const MemoReturnButton = React.memo(ReturnHomeButton);

const MeditationPage = () => {
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <MemoReturnButton />
      <MeditationContent />
    </section>
  );
};
export default MeditationPage;
