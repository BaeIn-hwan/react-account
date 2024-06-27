import { forwardRef } from "react";
import { PropsButton } from "./interface";

//
const Button = forwardRef<HTMLButtonElement, PropsButton>((props, ref) => {
  const { type = "button", disabled, children } = props;

  return (
    <button ref={ref} type={type} disabled={disabled}>
      {children}
    </button>
  );
});

export default Button;
