export interface ISettingsPage {
  exampleProp:string,
}

const SettingsPage = ({exampleProp}:ISettingsPage) => {
    return <div className="SettingsPage-container">{exampleProp}</div>;
};

export default SettingsPage;