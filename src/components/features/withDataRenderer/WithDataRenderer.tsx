import React from "react";

export type Component = React.ComponentType<{ data: string }>;

const withDataRenderer = (Component:Component) => {
  const DataRenderer = ({ dataArray }: { dataArray: string[] }) => (
    <>
      {dataArray.map((data, index) => (
        <Component key={index} data={data} />
      ))}
    </>
  );

  const componentName = Component.displayName || Component.name || "Component";
  DataRenderer.displayName = `WithDataRenderer(${componentName})`;

  return DataRenderer;
};

export default withDataRenderer;

/*
EXAMPLE:

// Example usage of the HOC
const DataItem = ({ data }: { data: string }) => (
  <option value={data}>{data}</option>
);

// Optional: Set a display name for DataItem
DataItem.displayName = 'DataItem';

const EnhancedComponent = withDataRenderer(DataItem);


const App = () => {
  const dataArray = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <EnhancedComponent dataArray={dataArray} />
    </div>
  );
};

export default App;
*/
