"use client"
import { useState } from "react"
const OpenAI_API_URL = 'https://api.openai.com/v1/chat/completions';
export default function ChatBotPage() {
  const [message, setMessage] = useState<string>("");
  const [responses, setResponses] = useState<string[]>([]);

  const handleSubmit = async () => {
    const res = await fetch(OpenAI_API_URL, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({model: "gpt-3.5-turbo", messages: [{ role: "user", content: message }] }),
    });

    if (res.ok) {
      const data = await res.json();
      setResponses(prev => [...prev, data.choices[0].message.content]);
      setMessage('');
    } else {
      const errorData = await res.json();
      console.error('Error fetching data:', errorData);
    }
  }

  const testHandleSubmit = async () => {
    const res = await fetch('/openai', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    if (res.ok) {
        const data = await res.json();
        setResponses(prev => [...prev, data.message]);
        setMessage('');
    } else {
        console.error('Error fetching data:', await res.text());
    }
  }

  return (
    <main className="flex flex-col bg-white w-screen h-screen justify-center items-center bg-gray-800">
      <div className="flex-1 mt-4 h-5/6 w-10/12 flex flex-row gap-4 lg:w-6/12">
        <div className="h-16 w-16 bg-red-500">

        </div>
        <div className="flex-1">
          {responses.map((resp, index) => (
            <p key={index}>{resp}</p>
          ))}
        </div>
      </div>
      <div className="flex mt-4 h-1/6 justify-center">
        <input 
          type="text" 
          value={message} 
          data-theme="night" 
          className="input-lg input input-bordered input input-primary" 
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={testHandleSubmit} className="w-12 h-12">Send</button>
      </div>
    </main>
  )
}
