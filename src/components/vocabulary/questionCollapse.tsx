"use client";
import { Collapse } from "antd";
import { useState,useEffect } from "react";
import type { CollapseProps } from "antd";
import Link from "next/link";

interface VocabularyItem {
  vocabularyId: number;
  userId: number;
  vocabularyContent: string;
  createDate: string;
}

interface GroupedData {
  date: string;
  practises: string[];
}


const initData = async (userName: string): Promise<Array<VocabularyItem> | null> => {
  try {
    const response = await fetch(`/api/getVocabularyList?userName=${userName}`);
    if (response.ok) {
      const data = await response.json();
      return data.data
    } else {
      console.error("提交失败");
      return null
    }
  } catch (error) {
    console.error("请求出错:", error);
    return null
  }
}

const groupByDate = (data: VocabularyItem[]): GroupedData[] => {
  return data.reduce((acc: GroupedData[], item: VocabularyItem) => {
    const { createDate, vocabularyContent } = item;

    // 查找是否已有该日期的分组
    const existingGroup = acc.find(group => group.date === createDate);

    if (existingGroup) {
      // 如果存在这个日期的分组，向 practises 数组添加内容
      existingGroup.practises.push(vocabularyContent);
    } else {
      // 如果没有这个日期的分组，创建一个新的分组
      acc.push({
        date: createDate,
        practises: [vocabularyContent]
      });
    }

    return acc;
  }, []);
};

const WrongQuestionCollapse = () => {
  const [items, setItems] = useState<CollapseProps["items"]>(); // 初始值为空数组
  // 用来存储第一个日期的 key
  const [defaultKey, setDefaultKey] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          const res = await initData(user.userName); // 等待 Promise 解析
          if(res!=null){
            const groupedData: GroupedData[] = groupByDate(res);
            console.log('groupedData',groupedData)
            const formattedItems = groupedData.map(
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

            setItems(formattedItems)
            
            setDefaultKey(formattedItems[0]?.key || ''); // 设置第一个 key
          }
          
        }
      }
    };

    fetchData();

  }, []); // 空数组表示只在组件挂载时运行
 
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
