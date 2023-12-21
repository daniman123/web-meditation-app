export interface IHomePage {
  exampleProp:string,
}

const HomePage = ({exampleProp}:IHomePage) => {
    return <div className="HomePage-container">{exampleProp}</div>;
};

export default HomePage;