import * as S from "./styled";

import { BaseInputProps, InputProps } from "./interface";
import { forwardRef, useState } from "react";
import { hasClear, hasPrefix } from "./utils";

const BaseInput = (props: BaseInputProps) => {
  const { children, onReset } = props;

  let element = children;

  if (hasClear(props) || hasPrefix(props)) {
    if (hasClear(props)) {
      element = (
        <>
          {element}
          <button type="button" onClick={onReset}>
            X
          </button>
        </>
      );
    }

    if (hasPrefix(props)) {
      element = (
        <>
          {props.prepend}
          {element}
          {props.append}
        </>
      );
    }

    element = <S.Wrapper>{element}</S.Wrapper>;
  }

  return <>{element}</>;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = "text",
    placeholder,
    name,
    disabled,
    value,
    defaultValue,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState<string>(
    value || defaultValue || ""
  );

  const handleReset = () => {
    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e);
  };

  const InputElement = () => {
    return (
      <S.Input
        ref={ref}
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
    );
  };

  return (
    <BaseInput {...rest} onReset={handleReset}>
      {InputElement()}
    </BaseInput>
  );
});

export default Input;
