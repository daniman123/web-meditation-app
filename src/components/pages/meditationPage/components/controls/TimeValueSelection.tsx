import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import DurationDropdown from "./DurationDropdown";

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
        <TitleBanner title="Select Duration" fontSize="text-xl" />

        <DurationDropdown
          isActive={isActive}
          selectedSeconds={selectedSeconds}
          setSelectedSeconds={setSelectedSeconds}
          setSeconds={setSeconds}
        />

        <div className="flex justify-center items-center h-24">
          <button
            className="w-16 h-16 rounded-full text-white font-bold text-xl bg-cyan-600"
            onClick={toggleTimer}
          >
            <span className="inline-block rotate-90 translate-x-0.5">
              &#9650;
            </span>
          </button>
        </div>
      </div>
    );
  }
};

export default TimeValueSelection;
