import { PropsInput } from "./interface";

export const hasClear = (props: PropsInput) => {
  const { clear } = props;

  return !!clear;
};

export const hasPrefix = (props: PropsInput) => {
  const { prepend, append } = props;

  return !!(prepend || append);
};
