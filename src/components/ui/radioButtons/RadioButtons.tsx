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
    <div>
      <label>
        <input
          type="radio"
          value="JKZ"
          checked={selectedOption === "JKZ"}
          onChange={handleOptionChange}
        />
        Jon Kabbat-Zinn
      </label>

      <label>
        <input
          type="radio"
          value="AP"
          checked={selectedOption === "AP"}
          onChange={handleOptionChange}
        />
        Andy Puddicombe
      </label>
    </div>
  );
};

export default RadioButtons;
