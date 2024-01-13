import Link from "next/link";
import { memo } from "react";

export interface IRouterButton {
  wrapperStyles: string;
  buttonStyles: string;
  buttonLabel: string;
  route: string;
}

const RouterButtons = ({
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

const RouterButton = memo(RouterButtons);

export default RouterButton;
