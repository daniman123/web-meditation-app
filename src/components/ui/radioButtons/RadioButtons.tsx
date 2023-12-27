import React, { Dispatch, SetStateAction } from "react";
import RadioButton, { IRadioButton } from "./components/RadioButton";

export interface IRadioButtons {
  selectedOption: string | undefined;
  setSelectedOption: Dispatch<SetStateAction<string | undefined>>;
}

const RadioButtons = ({ setSelectedOption, selectedOption }: IRadioButtons) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const data: IRadioButton[] = [
    {
      value: "JKZ",
      selectedOption,
      handleOptionChange,
      label: "Jon Kabbat-Zinn",
    },
    {
      value: "AP",
      selectedOption,
      handleOptionChange,
      label: "Andy Puddicombe",
    },
  ];

  return (
    <div className="flex items-center justify-center p-3">
      <div className="grid gap-2">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <RadioButton {...value} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
