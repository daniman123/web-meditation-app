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

        <button onClick={toggleTimer}>&#x25B6;</button>
      </div>
    );
  }
};

export default TimeValueSelection;
