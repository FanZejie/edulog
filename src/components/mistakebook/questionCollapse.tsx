"use client";
import { Collapse } from "antd";
import { useEffect, useState } from "react";
import type { CollapseProps } from "antd";
import Link from "next/link";


interface DataItem {
  date: string;
  units: string[];
}


const WrongQuestionCollapse = () => {
  const [items, setItems] = useState<CollapseProps["items"]>([]);
  // 用来存储第一个日期的 key
  const [defaultKey, setDefaultKey] = useState<string>('');
  useEffect(() => {
    try {
      const fetchData = async () => {
        // 你的异步操作
        const response = await fetch(`/api/getMistakeList`);
        if (response.ok) {
          const data = await response.json();
          if (data.code == 0) {
            setItems(data.data)
            // 遍历 data 并对 units 去重
            const uniqueData: DataItem[] = data.data.map((item: DataItem) => ({
              date: item.date,
              units: Array.from(new Set(item.units)), // 使用 Array.from
            }));

            const formattedItems = uniqueData.map(
              (item: { date: string; units: Array<string> }) => ({
                key: item.date, // 以日期作为 key
                label: item.date, // 面板的标题为日期
                children: (
                  <div className="flex flex-col gap-2">
                    {item.units.map((unit, idx) => (
                      <Link key={idx} href={`/dashboard/mistake-book/details?date=${item.date}&unit=${unit}`} className="pl-4">
                        {unit}
                      </Link>
                    ))}
                  </div>
                ),
              })
            );
            setItems(formattedItems)
            setDefaultKey(formattedItems[0]?.key || ''); // 设置第一个 key
          } else {
            console.error("code1:", data.message);
          }
        } else {
          console.error("提交失败");
          return null
        }
      };
      fetchData();
    } catch (error) {
      console.error("请求出错:", error);
    }
  }, [])
  return (
    <>
      {items && items.length > 0 && (
        <Collapse
          items={items}
          defaultActiveKey={defaultKey} // 设置默认展开的key
        />
      )}
    </>
  );
};

export default WrongQuestionCollapse;
