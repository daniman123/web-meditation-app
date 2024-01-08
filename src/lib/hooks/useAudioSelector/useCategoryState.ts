import { useState } from "react";

export const useCategoryState = () => {
  const [category, setCategory] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  return { category, handleCategoryChange };
};
