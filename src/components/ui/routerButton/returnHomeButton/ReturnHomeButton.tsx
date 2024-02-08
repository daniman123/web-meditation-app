import React from "react";
import RouterButton from "../RouterButton";

const ReturnHomeButton = React.memo(() => {
  return (
    <RouterButton
      wrapperStyles="p-3"
      buttonStyles="p-3 text-white font-semibold text-lg"
      buttonLabel="X"
      route="/"
    />
  );
});

ReturnHomeButton.displayName = "ReturnHomeButton";

export default ReturnHomeButton;
