export interface IStyledButton {
  exampleProp:string,
}

const StyledButton = ({exampleProp}:IStyledButton) => {
    return <div className="StyledButton-container">{exampleProp}</div>;
};

export default StyledButton;