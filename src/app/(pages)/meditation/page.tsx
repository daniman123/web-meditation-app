import MeditationPage from "@/components/pages/meditationPage/MeditationPage";
import React from "react";

const MemoMeditationPage = React.memo(MeditationPage);

const meditation = () => {
  return <MemoMeditationPage />;
};

export default meditation;
