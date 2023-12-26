export interface IStyledButton {
  wrapperStyles: string;
  buttonStyles: string;
  handleClick: () => void | Promise<void>;
  buttonLabel?: string;
  children: React.ReactNode;
}

const StyledButton = ({
  wrapperStyles,
  buttonStyles,
  handleClick,
  buttonLabel,
  children,
}: IStyledButton) => {
  return (
    <div className={wrapperStyles}>
      <button onClick={handleClick} className={buttonStyles}>
        {buttonLabel}
        {children}
      </button>
    </div>
  );
};

export default StyledButton;
