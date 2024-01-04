"use client";

import MeditationLogs from "@/components/features/meditationLogs/MeditationLogs";
import MeditationStats from "@/components/features/meditationStats/MeditationStats";
import ReturnHomeButton from "@/components/ui/routerButton/returnHomeButton/ReturnHomeButton";
import useMeditationLog from "@/lib/hooks/useMeditationLog";

export interface ISettingsPage {}

const SettingsPage = () => {
  const {
    averageSession,
    averageSessionsPerDay,
    totalSessions,
    totalTime,
    storedData,
    deleteAll,
  } = useMeditationLog();

  return (
    <div className="h-[100dvh] w-[100dvw]">
      <ReturnHomeButton />

      <MeditationStats
        averageSessionLength={averageSession}
        averageTotalSessionsPerDay={averageSessionsPerDay}
        totalSessionsMeditated={totalSessions}
        totalTimeMeditated={totalTime}
      />

      <MeditationLogs storedData={storedData} deleteAll={deleteAll} />
    </div>
  );
};

export default SettingsPage;
