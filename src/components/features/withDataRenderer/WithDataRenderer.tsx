import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ICategory = any;

export type Component = React.ComponentType<ICategory | string>;

const withDataRenderer = (Component: Component) => {
  const MemoizedComponent = React.memo(Component);

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
              <MemoizedComponent {...(data as ICategory)} />
            ) : (
              <MemoizedComponent data={data} />
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
