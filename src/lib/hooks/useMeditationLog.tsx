import { useCallback, useEffect, useState } from "react";
import {
  calculateCurrentStreak,
  calculateTotalTimeMeditated,
  getAverageTotalSessionsPerDay,
} from "../services/database/dataBaseManager";
import { ILocalStorageData } from "../services/database/types";
import { getFromLocalStorage } from "../services/database/utils";

const useMeditationLog = () => {
  const [storedData, setStoredData] = useState<
    ILocalStorageData[] | undefined
  >();

  const [totalTime, setTotalTime] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [averageSession, setAverageSession] = useState(0);
  const [averageSessionsPerDay, setAverageSessionsPerDay] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const allData = getFromLocalStorage("meditationsLog");
    setStoredData(allData);
  }, []);

  useEffect(() => {
    if (!storedData) return;

    const newCurrentStreak = calculateCurrentStreak(storedData);
    const newTotalTime = calculateTotalTimeMeditated(storedData) / 60;
    const newTotalSessions = storedData.length;
    const newAverageSession = newTotalTime / newTotalSessions;
    const newAverageSessionsPerDay = getAverageTotalSessionsPerDay(storedData);

    setStreak(newCurrentStreak);
    setTotalTime(newTotalTime);
    setTotalSessions(newTotalSessions);
    setAverageSession(newAverageSession);
    setAverageSessionsPerDay(newAverageSessionsPerDay);
  }, [storedData]);

  const deleteAll = () => {
    localStorage.clear();
    setStoredData([]);
  };

  const uploadJson = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader();
      const file = event.target.files?.[0];

      if (file && file.type === "application/json") {
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string);
            setStoredData(data);
            localStorage.setItem("meditationsLog", JSON.stringify(data));
          } catch (error) {
            console.error("Error reading file:", error);
          }
        };
      }
    },
    []
  );

  const downloadJson = useCallback(() => {
    const dataStr = JSON.stringify(storedData);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "meditationsLog.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }, [storedData]);

  return {
    storedData,
    totalTime,
    streak,
    totalSessions,
    averageSession,
    averageSessionsPerDay,
    deleteAll,
    uploadJson,
    downloadJson,
  };
};

export default useMeditationLog;
