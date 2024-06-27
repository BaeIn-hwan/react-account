export type checkValue = string | number;

export type columnsType = {
  width: number | string;
  field: string;
  label: string | number;
  align?: "center" | "right" | undefined;
};

export type SelectionParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  items?: checkValue[] | [];
};

export interface TableProps {
  columns: columnsType[];
  datas: {
    id: string;
    [key: string]: string | number | boolean | React.ReactNode;
  }[];
  selection?: (payload: SelectionParams) => void;
}
