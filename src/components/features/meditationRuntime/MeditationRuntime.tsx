import PauseButton from "@/components/ui/audioControls/PauseButton";
import PlayButton from "@/components/ui/audioControls/PlayButton";
import CountDownTimer from "@/components/ui/countDownTimer/CountDownTimer";

export interface IMeditationRuntime {
  duration: number;
  progress: number;
  toggleRuntime: () => Promise<void>;
  resetAudioPlayer: () => void;
  isPaused: boolean;
}

const MeditationRuntime = ({
  duration,
  progress,
  toggleRuntime,
  isPaused,
  resetAudioPlayer,
}: IMeditationRuntime) => {
  return (
    <>
      <div className="w-full h-1/2 flex justify-center items-center">
        <CountDownTimer initialTime={duration} timeLeft={progress} />
      </div>

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
};

export default MeditationRuntime;
