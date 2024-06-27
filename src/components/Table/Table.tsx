import { useState } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import { checkValue, TableProps } from "./interface";
import "./table.css";

const setAlign = (align: string | undefined) => {
  if (!align) return "";

  return align;
};

const Table = (props: TableProps) => {
  const { columns, datas, selection } = props;
  const [selectList, setSelectList] = useState<checkValue[]>([]);

  const isCheckAll = () => selectList.length === datas.length;

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const items = selectList.includes(value)
      ? selectList.filter((item) => item !== value)
      : [...selectList, value];

    selection?.({ e, items });

    setSelectList(items);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleSelectAll");
    const items = e.target.checked ? datas.map((item) => item.id) : [];

    setSelectList(items);
    selection?.({ e, items });
  };

  return (
    <div className="tableWrapper">
      <div className="table">
        <div className="tableHead">
          <div className="tableRow">
            {selection && (
              <div className="tableCell tableHeader tableCheckbox">
                <Checkbox checked={isCheckAll()} onChange={handleSelectAll} />
              </div>
            )}
            {columns.map((col) => (
              <div
                className={`tableCell tableHeader ${setAlign(col.align)}`}
                key={col.field}
              >
                {col.label}
              </div>
            ))}
          </div>
        </div>

        <div className="tableBody">
          {datas.map((data, index) => (
            <div className="tableRow" key={index}>
              {selection && (
                <div className="tableCell tableCheckbox">
                  <Checkbox
                    checked={selectList.includes(data.id)}
                    value={data.id}
                    onChange={handleCheckbox}
                  />
                </div>
              )}
              {columns.map((col) => (
                <div
                  className={`tableCell ${setAlign(col.align)}`}
                  key={col.field}
                  style={{ width: `${col.width}` }}
                >
                  {data[col.field]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
