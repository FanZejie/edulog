"use client";
import { Collapse } from "antd";
import { useState } from "react";
import type { CollapseProps } from "antd";
import Link from "next/link";

const data = [
  {
    date: "2024-09-01",
    practises: [
      "adventure",
    ],
  },
  {
    date: "2024-09-02",
    practises: [
        "certainly",
        "curious"
      ],
  },
];

const formattedItems = data.map(
  (item: { date: string; practises: Array<string> }) => ({
    key: item.date, // 以日期作为 key
    label: item.date, // 面板的标题为日期
    children: (
      <div className="flex flex-col gap-2">
        {item.practises.map((practise,idx) => (
          <Link key={idx} href={`/dashboard/vocabulary/details?date=${item.date}&practise=${practise}`} className="pl-4">
            {practise}
          </Link>
        ))}
      </div>
    ),
  })
);
const WrongQuestionCollapse = () => {
  const [items, setItems] = useState<CollapseProps["items"]>(formattedItems);
  // 用来存储第一个日期的 key
  const [defaultKey, setDefaultKey] = useState<string>(formattedItems[0].key);

  return (
    <Collapse
      items={items}
      defaultActiveKey={defaultKey} // 设置默认展开的key
    />
  );
};

export default WrongQuestionCollapse;
