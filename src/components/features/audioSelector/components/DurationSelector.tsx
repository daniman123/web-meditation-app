import withDataRenderer from "../../withDataRenderer/WithDataRenderer";
import DurationSelectorItem from "./DurationSelectorItem";

export interface IDurationSelector {
  duration: string;
  handleDurationChange: (_e: React.ChangeEvent<HTMLSelectElement>) => void;
  speaker: string;
  durations: string[];
}

const EnhancedComponent = withDataRenderer(DurationSelectorItem);

const DurationSelector = ({
  duration,
  durations,
  handleDurationChange,
  speaker,
}: IDurationSelector) => (
  <select
    value={duration}
    onChange={handleDurationChange}
    disabled={!speaker}
    aria-label="Select Duration"
  >
    <option value="">Select Duration</option>
    <EnhancedComponent dataArray={durations} />
  </select>
);

export default DurationSelector;
