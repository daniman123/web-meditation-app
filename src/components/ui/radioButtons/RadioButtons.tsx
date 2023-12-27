import React, { Dispatch, SetStateAction } from "react";

export interface IRadioButtons {
  selectedOption: string | undefined;
  setSelectedOption: Dispatch<SetStateAction<string | undefined>>;
}

const RadioButtons = ({ setSelectedOption, selectedOption }: IRadioButtons) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-center p-3">
      <div className="grid gap-2">
        <label className="font-semibold">
          <input
            className="mr-2"
            type="radio"
            value="JKZ"
            checked={selectedOption === "JKZ"}
            onChange={handleOptionChange}
          />
          Jon Kabbat-Zinn
        </label>

        <label className="font-semibold">
          <input
            className="mr-2"
            type="radio"
            value="AP"
            checked={selectedOption === "AP"}
            onChange={handleOptionChange}
          />
          Andy Puddicombe
        </label>
      </div>
    </div>
  );
};

export default RadioButtons;
