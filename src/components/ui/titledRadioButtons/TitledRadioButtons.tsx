import RadioButtons from "../radioButtons/RadioButtons";
import TitleBanner from "../titleBanner/TitleBanner";

export interface ITitledRadioButtons {
  data: {
    value: string;
    label: string;
  }[];
  selectedOption: string | undefined;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | undefined>>;
  title: string;
}

const TitledRadioButtons = ({
  data,
  selectedOption,
  setSelectedOption,
  title,
}: ITitledRadioButtons) => {
  return (
    <>
      <TitleBanner fontSize="text-xl" title={title} />
      <RadioButtons
        options={data}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
};

export default TitledRadioButtons;
