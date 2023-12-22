import { formatTimeValueDisplay, timeValueOptions } from "@/lib/utils";

export interface ITimeValueSelection {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  selectedSeconds: number;
  setSelectedSeconds: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  toggleTimer: () => void;
  isRuntimePaused: boolean;
}

const TimeValueSelection = ({
  isActive,
  isRuntimePaused,
  selectedSeconds,
  setSeconds,
  setSelectedSeconds,
  toggleTimer,
}: ITimeValueSelection) => {
  if (!isActive && !isRuntimePaused) {
    return (
      <div className="grid">
        <p>Select Duration</p>
        <select
          name="time-values"
          id=""
          value={selectedSeconds}
          onChange={(itemValue) => {
            const value = parseInt(itemValue.target.value);
            setSelectedSeconds(value);
            if (!isActive) {
              setSeconds(value);
            }
          }}
        >
          {timeValueOptions().map((value, i) => (
            <option key={i} value={value}>
              {formatTimeValueDisplay(value)}
            </option>
          ))}
        </select>

        <button onClick={toggleTimer}>&#x25B6;</button>
      </div>
    );
  }
};

export default TimeValueSelection;
