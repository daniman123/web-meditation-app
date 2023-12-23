import { formatTimeValueDisplay, timeValueOptions } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export interface IDurationDropdown {
  selectedSeconds: number;
  setSelectedSeconds: Dispatch<SetStateAction<number>>;
  isActive: boolean;
  setSeconds: Dispatch<SetStateAction<number>>;
}

const DurationDropdown = ({
  selectedSeconds,
  setSelectedSeconds,
  isActive,
  setSeconds,
}: IDurationDropdown) => {
  return (
    <div className="w-full flex justify-center p-5">
      <select
        name="time-values"
        id=""
        className="w-1/2 h-10 shadow-2xl relative outline-none bg-black/20 rounded"
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
          <option key={i} className="text-center text-semibold" value={value}>
            {formatTimeValueDisplay(value)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DurationDropdown;
