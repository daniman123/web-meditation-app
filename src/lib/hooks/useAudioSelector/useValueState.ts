import { useState } from "react";

export const useValueState = () => {
  const [value, setValue] = useState<string>("");

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  return { value, handleValueChange, setValue };
};
