export interface IAudioControls {
  exampleProp:string,
}

const AudioControls = ({exampleProp}:IAudioControls) => {
    return <div className="AudioControls-container">{exampleProp}</div>;
};

export default AudioControls;