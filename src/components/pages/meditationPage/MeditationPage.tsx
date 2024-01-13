"use client";

import AudioPlayback from "@/components/features/audioPlayback/AudioPlayback";
import AudioSelector from "@/components/features/audioSelector/AudioSelector";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import React, { useState } from "react";

export interface IMeditationPage {}

const MemoReturnButton = React.memo(ReturnHomeButton);
const MemoAudioSelector = React.memo(AudioSelector);
const MemoAudioPlayback = React.memo(AudioPlayback);

const MeditationPage = () => {
  const [audioSrc, setAudioSrc] = useState<string>("");

  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <MemoReturnButton />
      <MemoAudioSelector setAudioSrc={setAudioSrc} />
      {typeof window !== "undefined" && audioSrc && (
        <>
          <MemoAudioPlayback src={audioSrc} />
        </>
      )}
    </section>
  );
};
export default MeditationPage;
