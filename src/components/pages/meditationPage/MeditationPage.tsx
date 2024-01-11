"use client";

import AudioPlayback from "@/components/features/audioPlayback/AudioPlayback";
import AudioSelector from "@/components/features/audioSelector/AudioSelector";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import { useState } from "react";

export interface IMeditationPage {}

const MeditationPage = () => {
  const [audioSrc, setAudioSrc] = useState<string>("");

  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />
      <AudioSelector setAudioSrc={setAudioSrc} />
      {typeof window !== "undefined" && audioSrc && (
        <>
          <AudioPlayback src={audioSrc} />
        </>
      )}
    </section>
  );
};
export default MeditationPage;
