import { IRadioButtonGroup } from "./RadioButtons";

const base: IRadioButtonGroup = {
  handleOptionChange: () => {},
  selectedOption: "",
  options: [],
};

export const mockRadioButtonsProps = {
  base,
};
