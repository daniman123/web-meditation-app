export interface ITitleBanner {
  title: string;
  fontSize: string;
}

const TitleBanner = ({ title, fontSize }: ITitleBanner) => {
  return (
    <div className="">
      <h1
        className={`font-bold text-white text-4xl text-center ${fontSize}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleBanner;
