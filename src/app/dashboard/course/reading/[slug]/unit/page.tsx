"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const UnitPage = () => {
    const router = useRouter();
  const { slug } = useParams<{ slug: string | string[] }>(); // 获取动态路由参数

  // 确保 slug 是字符串
  const title = Array.isArray(slug) ? slug[0] : slug; // 如果是数组，取第一个元素

  const decodedTitle = decodeURIComponent(title); // 解码

  const handleAdd = () => {
    alert('调用post请求，存储选中参数')
  }
  return (
    <div className="flex flex-row gap-4">
      <div className="w-2/3 flex flex-col gap-4 mt-12">
        <h1 className="text-4xl font-bold">{decodedTitle}</h1>
        <div className="flex flex-row gap-4 mt-8">
          <Checkbox />
          <div>
            <h1 className="text-2xl font-semibold">
              {`Word:adventure (noun)`}
            </h1>
            <ul className="list-disc pl-8 text-xl pt-2">
              <li>Definition: an exciting experience</li>
              <li>
                Sample Sentence: The magic carpet took Jamal on an adventure to
                faraway lands.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <Checkbox />
          <div>
            <h1 className="text-2xl font-semibold">
              {`Word:certainly (adverb)`}
            </h1>
            <ul className="list-disc pl-8 text-xl pt-2">
              <li>Definition: an exciting experience</li>
              <li>
                Sample Sentence: The magic carpet took Jamal on an adventure to
                faraway lands.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <Checkbox />
          <div>
            <h1 className="text-2xl font-semibold">
              {`Word: curious (adjective)`}
            </h1>
            <ul className="list-disc pl-8 text-xl pt-2">
              <li>Definition: an exciting experience</li>
              <li>
                Sample Sentence: The magic carpet took Jamal on an adventure to
                faraway lands.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full p-4">
          <button
            onClick={handleAdd}
            className="bg-[#6C7B49] text-white py-2 px-16 rounded mt-4 font-bold">
            Add to Vocabulary
          </button>
          <button
            onClick={() => {
                router.push("/dashboard/course");
            }}
            className="bg-[#1EE76E] text-white py-2 px-16 rounded mt-4 ml-8 font-bold">
            Back to Cousre
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitPage;
