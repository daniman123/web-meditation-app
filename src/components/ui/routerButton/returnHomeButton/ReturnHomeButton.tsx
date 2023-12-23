import RouterButton from "../RouterButton";

const ReturnHomeButton = () => {
  return (
    <RouterButton
      wrapperStyles="p-3"
      buttonStyles={"p-3 text-white font-semibold text-lg"}
      buttonLabel={"X"}
      route={"/"}
    />
  );
};

export default ReturnHomeButton;
