import { useEffect, useState } from "react";
import "./checkbox.css";
import { PropsCheckbox } from "./interface";

const Checkbox = (props: PropsCheckbox) => {
  const { value, checked, entire, children, onChange } = props;

  const [disabled, setDisabled] = useState(props.disabled);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  useEffect(() => {
    if (disabled !== props.disabled) {
      setDisabled(props.disabled);
    }
  }, [disabled, props.disabled]);

  return (
    <label className={`checkbox ${disabled ? "disabled" : ""}`}>
      <div className={`checkboxGroup`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
        <span className="checkboxIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={16}
            height={16}
            strokeWidth={3}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && <span>{children}</span>}
    </label>
  );
};

export default Checkbox;
