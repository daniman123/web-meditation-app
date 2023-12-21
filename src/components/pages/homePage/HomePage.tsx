import Settings from "./components/settingsButton/Settings";
import StartButton from "./components/startButton/StartButton";
import TitleBanner from "./components/titleBanner/TitleBanner";

export interface IHomePage {}

const HomePage = () => {
  return (
    <section className="h-[100dvh] w-[100dvw] bg-cover bg-center bg-no-repeat bg-home-screen grid grid-rows-[.6fr_1.2fr_1.2fr]">
      <Settings />
      <TitleBanner />
      <StartButton />
    </section>
  );
};

export default HomePage;
