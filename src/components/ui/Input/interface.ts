export interface CommonInputProps {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  clear?: boolean;
  children: React.ReactNode;
  onReset: React.MouseEventHandler;
}

export interface BaseInputProps extends CommonInputProps {}

export interface InputProps extends CommonInputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  defaultValue?: string;
  // onChange?: (e) => void;
}
