import React from "react";
// import { ICategory } from "../audioSelector/AudioSelector";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ICategory = any;

export type Component = React.ComponentType<ICategory | string>;

const withDataRenderer = (Component: Component) => {
  const DataRenderer = ({
    dataArray,
  }: {
    dataArray: ICategory[] | string[];
  }) => (
    <>
      {dataArray.map((data, index) => {
        const isObject = typeof data === "object" && data !== null;

        return (
          <React.Fragment key={index}>
            {isObject ? (
              <Component {...(data as ICategory)} />
            ) : (
              <Component data={data} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );

  const componentName = Component.displayName || Component.name || "Component";
  DataRenderer.displayName = `WithDataRenderer(${componentName})`;

  return DataRenderer;
};

export default withDataRenderer;
