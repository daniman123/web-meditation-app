export interface IRadioButton {
  selectedOption: string | undefined;
  handleOptionChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

const RadioButton = ({
  selectedOption,
  handleOptionChange,
  value,
  label,
}: IRadioButton) => {
  return (
    <label className="font-semibold">
      <input
        className="mr-2"
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={handleOptionChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
