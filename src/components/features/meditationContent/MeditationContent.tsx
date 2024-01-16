import { AudioContextProvider } from "../audioContextProvider/AudioContextProvider";
import AudioPlayback from "../audioPlayback/AudioPlayback";
import AudioSelector from "../audioSelector/AudioSelector";

const MeditationContent = () => {
  return (
    <AudioContextProvider>
      <div className="flex justify-center">
        <AudioSelector />
      </div>
      <AudioPlayback />
    </AudioContextProvider>
  );
};

export default MeditationContent;
