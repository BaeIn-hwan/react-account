export interface PropsCheckbox {
  value?: string | number | readonly string[] | undefined;
  checked?: boolean;
  disabled?: boolean;
  entire?: boolean;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
