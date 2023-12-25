"use client";

import RenderDurationOptions from "@/components/ui/renderDurationOptions/RenderDurationOptions";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import useAudioPlayer from "@/lib/hooks/useAudioPlayer";
import { useState } from "react";

import CountDownTimer from "@/components/ui/countDownTimer/CountDownTimer";
import audioFileRoutes from "../../../lib/services/audioFileManager/audioRoutes.json";

export interface IMeditationPage {}

const MeditationPage = () => {
  const [src, setSrc] = useState<string | undefined>();

  const { togglePlayPause, progress, duration, isPlaying } =
    useAudioPlayer(src);
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />

      <div className="w-full h-1/2">
        <CountDownTimer initialTime={duration} timeLeft={progress} />
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <RenderDurationOptions
        audioFileRoutes={audioFileRoutes}
        setSrc={setSrc}
      />
    </section>
  );
};

export default MeditationPage;
