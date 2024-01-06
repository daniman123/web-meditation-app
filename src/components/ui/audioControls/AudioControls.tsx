import PauseButton from "@/components/ui/audioControls/PauseButton";
import PlayButton from "@/components/ui/audioControls/PlayButton";

interface ControlButtonsProps {
  toggleRuntime: () => Promise<void>;
  resetAudioPlayer: () => void;
  isPaused: boolean;
}

const ControlButtons = ({ toggleRuntime, resetAudioPlayer, isPaused }: ControlButtonsProps) => (
  <>
    {!isPaused ? (
      <PauseButton toggleRuntime={toggleRuntime} />
    ) : (
      <>
        <PlayButton toggleRuntime={toggleRuntime} />
        <button onClick={resetAudioPlayer} className="bg-emerald-500">
          Reset
        </button>
      </>
    )}
  </>
);

export default ControlButtons;