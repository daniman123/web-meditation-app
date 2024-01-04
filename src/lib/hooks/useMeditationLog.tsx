import { useEffect, useState } from "react";
import {
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

  useEffect(() => {
    const allData = getFromLocalStorage("meditationsLog");
    setStoredData(allData);
  }, []);

  useEffect(() => {
    if (!storedData) return;

    const newTotalTime = calculateTotalTimeMeditated(storedData) / 60;
    const newTotalSessions = storedData.length;
    const newAverageSession = newTotalTime / newTotalSessions;
    const newAverageSessionsPerDay = getAverageTotalSessionsPerDay(storedData);

    setTotalTime(newTotalTime);
    setTotalSessions(newTotalSessions);
    setAverageSession(newAverageSession);
    setAverageSessionsPerDay(newAverageSessionsPerDay);
  }, [storedData]);

  const deleteAll = () => {
    localStorage.clear();
    setStoredData([]);
  };

  return {
    storedData,
    totalTime,
    totalSessions,
    averageSession,
    averageSessionsPerDay,
    deleteAll,
  };
};

export default useMeditationLog;
