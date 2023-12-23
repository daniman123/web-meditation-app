import { formatTimeValueDisplay, timeValueOptions } from "@/lib/utils";

export interface IDurationDropdown {
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
}

const DurationDropdown = ({
  duration,
  setDuration,
  isActive,
}: IDurationDropdown) => {
  return (
    <div className="w-full flex justify-center items-center p-5 h-48">
      <select
        name="time-values"
        id=""
        className="w-1/2 h-10 shadow-2xl relative outline-none bg-black/20 rounded"
        value={duration}
        onChange={(itemValue) => {
          const value = parseInt(itemValue.target.value);
          if (!isActive) {
            setDuration(value);
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
