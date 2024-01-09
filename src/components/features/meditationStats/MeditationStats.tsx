export interface IMeditationStats {
  totalTimeMeditated: number;
  totalSessionsMeditated: number;
  averageSessionLength: number;
  averageTotalSessionsPerDay: number;
}

const MeditationStats = ({
  totalTimeMeditated,
  totalSessionsMeditated,
  averageSessionLength,
  averageTotalSessionsPerDay,
}: IMeditationStats) => {
  return (
    <div className="flex justify-center p-3">
      <div className="w-full grid grid-rows-5 p-4 bg-gray-300 rounded-lg">
        <p className="row-span-2 flex items-center text-2xl">
          Total Time Meditated: {(totalTimeMeditated / 60).toFixed(2)}h.
        </p>
        <p>- Total Sessions Meditated: {totalSessionsMeditated}</p>
        <p>- Average Session Length: {averageSessionLength.toFixed(2)}m.</p>
        <p>
          - Average Total Sessions Per Day:{" "}
          {averageTotalSessionsPerDay.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MeditationStats;
