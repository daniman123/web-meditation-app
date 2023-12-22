"use client";

import useMeditationTimer from "@/lib/hooks/useMeditationTimer";
import TimeValueSelection from "./components/controls/TimeValueSelection";
import TimeDisplay from "./components/display/TimeDisplay";

export interface IMeditationPage {}

const MeditationPage = () => {
  const {
    seconds,
    setSeconds,
    selectedSeconds,
    setSelectedSeconds,
    isActive,
    resetTimer,
    toggleTimer,
    toggleActiveRuntime,
    isRuntimePaused,
  } = useMeditationTimer();
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-meditation-screen grid grid-rows-[.6fr_1.2fr_1.2fr]">
      <TimeDisplay
        seconds={seconds}
        isActive={isActive}
        isRuntimePaused={isRuntimePaused}
        toggleActiveRuntime={toggleActiveRuntime}
        resetTimer={resetTimer}
      />

      <TimeValueSelection
        isActive={isActive}
        isRuntimePaused={isRuntimePaused}
        selectedSeconds={selectedSeconds}
        setSeconds={setSeconds}
        setSelectedSeconds={setSelectedSeconds}
        toggleTimer={toggleTimer}
      />
    </section>
  );
};

export default MeditationPage;