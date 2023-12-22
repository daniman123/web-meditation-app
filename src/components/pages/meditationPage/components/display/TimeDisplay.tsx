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
        <div>
          <p>{formatTimeValueDisplay(seconds)}</p>
        </div>
        <button onClick={toggleActiveRuntime}>
          {!isRuntimePaused ? "II" : "▶"}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
  }
};

export default TimeDisplay;
