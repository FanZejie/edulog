
'use client';
import './chatcontainer.css'
import React, { useState } from 'react';

const ChatContainer = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleSend = async () => {
    if (!input) return;

    const newMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await fetch('https://api.aiproxy.io/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-5oT1t9spDu7dI2MuIGVsIfsoUafbtGM5gQXXg7zEpQBmcdVD',  // 替换为你的 OpenAI 密钥
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a teacher,when you get a question, you should give me a detailed answer,and tell me reason and give me some study skills about this quesion',
            },
            {
              role:'user',
              content: input
            }
          ],
        }),
      });
  

      const data = await response.json();
      const botMessage ={
        role: data.choices[0].message.role,
        content: data.choices[0].message.content
      } 
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="input"
        />
        <button onClick={handleSend} className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default ChatContainer;