import React, { Dispatch, SetStateAction } from "react";
import RadioButton, { IRadioButton } from "./components/RadioButton";

export interface IRadioButtons {
  selectedOption: string | undefined;
  setSelectedOption: Dispatch<SetStateAction<string | undefined>>;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

const RadioButtons = ({ setSelectedOption, selectedOption, options, className = "" }: IRadioButtons) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const radioButtonData: IRadioButton[] = options.map(option => ({
    value: option.value,
    selectedOption,
    handleOptionChange,
    label: option.label,
  }));

  return (
    <div className={`flex items-center justify-center p-3 ${className}`}>
      <div className="grid gap-2">
        {radioButtonData.map(option => (
          <RadioButton key={option.value} {...option} />
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
