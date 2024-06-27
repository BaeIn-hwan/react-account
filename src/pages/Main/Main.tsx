import { useRef, useState } from "react";
import "./main.css";

import dayjs from "dayjs";
import { Button } from "@/components/ui/Button";
import { Table } from "@/components/Table";
import { SelectionParams } from "@/components/Table/interface";
const today = dayjs();

const columns = [
  { field: "content", label: "내용", width: `calc(100% / 4 - 40px)` },
  { field: "type", label: "입금/출금", width: `calc(100% / 4 - 40px)` },
  { field: "price", label: "금액", width: `calc(100% / 4 - 40px)` },
  { field: "date", label: "날짜", width: `calc(100% / 4 - 40px)` },
];

const changeFormatKRW = (price: number): string => {
  return price.toLocaleString("ko-kr");
};

function Main() {
  const [lists, setLists] = useState([
    {
      id: "1234",
      content: "제목1",
      price: changeFormatKRW(100000),
      type: "입금",
      date: today.format("YYYY-MM-DD"),
      isChecked: false,
    },
    {
      id: "1123",
      content: "제목2",
      price: changeFormatKRW(100000),
      type: "출금",
      date: today.format("YYYY-MM-DD"),
      isChecked: false,
    },
    {
      id: "1111",
      content: "제목3",
      price: changeFormatKRW(100000),
      type: "출금",
      date: today.format("YYYY-MM-DD"),
      isChecked: false,
    },
  ]);
  const [checkList, setCheckList] = useState<any>([]);

  const handleSelectItem = (payload: SelectionParams) => {
    const { items } = payload;

    setCheckList(items);
  };

  return (
    <div className="main">
      <div className="status">
        <ul className="statusList">
          <li className="statusItem">
            <span className="statusItemTitle">입금</span>
            <span className="statusItemPrice income">100,000</span>
          </li>
          <li className="statusItem">
            <span className="statusItemTitle">출금</span>
            <span className="statusItemPrice expend">100,000</span>
          </li>
          <li className="statusItem">
            <span className="statusItemTitle">합계</span>
            <span className="statusItemPrice">100,100</span>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "50px" }}>
        <div>
          <Button>버튼</Button>
        </div>
        <Table datas={lists} columns={columns} selection={handleSelectItem} />
      </div>

      {/* <ul className="accountList">
        <li className="accountItem">
          <div className="accountLeft">
            <p className="accountItemContent">블라블라</p>
            <span className="accountItemDate">2024.03.03</span>
          </div>
          <div className="accountRight">
            <span className="accountItemType">지출</span>
            <span className="accountItemPrice expend">100,000</span>
          </div>
        </li>

        <li className="accountItem">
          <div className="accountLeft">
            <p className="accountItemContent">블라블라</p>
            <span className="accountItemDate">2024.03.03</span>
          </div>
          <div className="accountRight">
            <span className="accountItemType">수입</span>
            <span className="accountItemPrice income">100,000</span>
          </div>
        </li>
      </ul> */}
    </div>
  );
}

export default Main;
