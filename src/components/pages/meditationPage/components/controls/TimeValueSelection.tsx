import TitleBanner from "@/components/ui/titleBanner/TitleBanner";
import DurationDropdown from "./DurationDropdown";

export interface ITimeValueSelection {
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  toggleTimer: () => void;
  isRuntimePaused: boolean;
}

const TimeValueSelection = ({
  isActive,
  isRuntimePaused,
  duration,
  setDuration,

  toggleTimer,
}: ITimeValueSelection) => {
  if (!isActive && !isRuntimePaused) {
    return (
      <div className="grid">
        <TitleBanner title="Select Duration" fontSize="text-xl" />

        <DurationDropdown
          isActive={isActive}
          duration={duration}
          setDuration={setDuration}
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
