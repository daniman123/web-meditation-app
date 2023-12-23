import Link from "next/link";

export interface IRouterButton {
  wrapperStyles: string;
  buttonStyles: string;
  buttonLabel: string;
  route: string;
}

const RouterButton = ({
  buttonLabel,
  buttonStyles,
  route,
  wrapperStyles,
}: IRouterButton) => {
  return (
    <div className={wrapperStyles}>
      <Link href={route}>
        <button className={buttonStyles}>{buttonLabel}</button>
      </Link>
    </div>
  );
};

export default RouterButton;
