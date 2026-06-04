import React, { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

        const sendMessage = async () => {
  const userMessage = input;

  setMessages([...messages, { role: "user", text: userMessage }]);
  setInput("");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_API_KEY`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMessage }]
    })
  });

  const data = await res.json();

  setMessages((prev) => [
    ...prev,
    { role: "ai", text: data.choices[0].message.content }
  ]);
};


  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">AI Assistant</h1>

      <div className="h-80 overflow-y-auto border p-2 mt-3">
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role}:</b> {m.text}
          </p>
        ))}
      </div>

      <div className="flex mt-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border flex-1 p-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4">
          Send
        </button>
      </div>
    </div>
  );
}