import RadioButton from "./components/RadioButton";

export interface IRadioButtonGroup {
  options: string[];
  handleOptionChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

const RadioButtonGroup = ({
  options,
  handleOptionChange,
  selectedOption,
}: IRadioButtonGroup) => (
  <>
    {options.map((option) => (
      <RadioButton
        key={option}
        handleOptionChange={handleOptionChange}
        label={option}
        selectedOption={selectedOption}
        value={option}
      />
    ))}
  </>
);

export default RadioButtonGroup;
