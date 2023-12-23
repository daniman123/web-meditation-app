import { formatTimeValueDisplay } from "@/lib/utils";

export interface ITimeDisplay {
  seconds: number;
  isActive: boolean;
  isRuntimePaused: boolean;
  toggleActiveRuntime: () => void;
  resetTimer: () => void;
}
const TimeDisplay = ({
  seconds,
  isActive,
  isRuntimePaused,
  toggleActiveRuntime,
  resetTimer,
}: ITimeDisplay) => {
  if (isActive || isRuntimePaused) {
    return (
      <div className="grid">
        <div className="flex justify-center items-center h-96">
          <p className="border-4 border-cyan-100 p-28 rounded-full text-3xl font-bold bg-cyan-400/15">
            {formatTimeValueDisplay(seconds)}
          </p>
        </div>

        <div className="flex justify-center items-center h-24">
          <button
            className="w-16 h-16 rounded-full text-white font-bold text-xl bg-cyan-600"
            onClick={toggleActiveRuntime}
          >
            {!isRuntimePaused ? (
              <span>II</span>
            ) : (
              <span className="inline-block rotate-90 translate-x-0.5">
                &#9650;
              </span>
            )}
          </button>
        </div>

        <div className="flex justify-center items-center h-10">
          <button
            className="w-16 h-7 bg-emerald-600 rounded-xl text-white font-medium"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
};

export default TimeDisplay;
