import UseTestHook from "./UseTestHook";

export const TestHooksComponent = () => {
  UseTestHook();
  return <div id="hook-value"></div>;
};
