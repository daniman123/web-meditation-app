"use client";

import RenderDurationOptions from "@/components/ui/renderDurationOptions/RenderDurationOptions";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import useAudioPlayer from "@/lib/hooks/useAudioPlayer";
import { useState } from "react";

import CountDownTimer from "@/components/ui/countDownTimer/CountDownTimer";
import StyledButton from "@/components/ui/styledButton/StyledButton";
import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import Image from "next/image";
import audioFileRoutes from "../../../lib/services/audioFileManager/audioRoutes.json";

export interface IMeditationPage {}

const MeditationPage = () => {
  const [src, setSrc] = useState<string | undefined>();
  const [speaker, setSpeaker] = useState<string | undefined>();

  const {
    togglePlayPause,
    progress,
    duration,
    isPlaying,
    isPaused,
    toggleRuntime,
  } = useAudioPlayer(src);
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />
      {isPlaying && (
        <>
          <div className="w-full h-1/2 flex justify-center items-center">
            <CountDownTimer initialTime={duration} timeLeft={progress} />
          </div>
          <StyledButton
            wrapperStyles="flex justify-center items-center"
            buttonStyles="w-20 h-20 p-3 rounded-full text-white font-semibold"
            handleClick={toggleRuntime}
          >
            <div className="relative w-full h-full bg-white rounded-full">
              {!isPaused ? (
                <Image
                  alt=""
                  src={"/pause-button.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              ) : (
                <Image
                  alt=""
                  src={"/play-button.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              )}
            </div>
          </StyledButton>
        </>
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
            <button onClick={() => setSpeaker("JKZ")}>Jon Kabbat-Zinn</button>
            <button onClick={() => setSpeaker("AP")}>Andy Puddicombe</button>
          </>
        )
      )}
    </section>
  );
};

export default MeditationPage;
