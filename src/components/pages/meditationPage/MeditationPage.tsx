"use client";

import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import useMeditationTimer from "@/lib/hooks/useMeditationTimer";
import TimeValueSelection from "./components/controls/TimeValueSelection";
import TimeDisplay from "./components/display/TimeDisplay";

export interface IMeditationPage {}

const MeditationPage = () => {
  const {
    duration,
    setDuration,
    isActive,
    resetTimer,
    toggleTimer,
    toggleActiveRuntime,
    isRuntimePaused,
  } = useMeditationTimer();
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen">
      <ReturnHomeButton />

      <TimeDisplay
        seconds={duration}
        isActive={isActive}
        isRuntimePaused={isRuntimePaused}
        toggleActiveRuntime={toggleActiveRuntime}
        resetTimer={resetTimer}
      />

      <TimeValueSelection
        isActive={isActive}
        isRuntimePaused={isRuntimePaused}
        duration={duration}
        setDuration={setDuration}
        toggleTimer={toggleTimer}
      />
    </section>
  );
};

export default MeditationPage;
