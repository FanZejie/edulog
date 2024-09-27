"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
const ChatContainer = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );

  const handleSend = async () => {
    if (!input) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch(
        "https://api.aiproxy.io/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer sk-5oT1t9spDu7dI2MuIGVsIfsoUafbtGM5gQXXg7zEpQBmcdVD", // 替换为你的 OpenAI 密钥
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a teacher,when you get a question, you should give me a detailed answer,and tell me reason and give me some study skills about this quesion",
              },
              {
                role: "user",
                content: input,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botMessage = {
        role: data.choices[0].message.role,
        content: data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div className="w-full h-[calc(100vh-250px)] flex flex-col items-center justify-center ">
      <div className="w-full h-full overflow-y-auto p-2 mb-2">

        {
            messages.map((msg, idx) => (
                <MessageBox
                    key={idx}
                    id={`message-${idx}`}      // 添加 id
                    position={msg.role === "user" ? "right" : "left"}
                    type="text"
                    title={msg.role === "user" ? "User" : "Bot"}
                    text={msg.content}
                    {...({} as any)}  // 使用断言忽略其他类型错误
                />
            ))
        }

      </div>
      <div className="w-full flex flex-row items-center justify-center">
        <Image
          onClick={handleSend}
          src="/fileupload.png"
          alt="send"
          width={60}
          height={60}
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-grow p-2 border border-gray-300 rounded-md"
        />

        <Image
          onClick={handleSend}
          src="/send.png"
          alt="send"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
