import { useState, useEffect } from 'react';

export default function Chat({ lessonId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Initialize WebSocket connection
    // The URL should point to the backend WebSocket service, including the lessonId for room differentiation
    const newSocket = new WebSocket(`${process.env.NEXT_PUBLIC_CHAT_WS_URL}/lessons/${lessonId}`);
    setSocket(newSocket);
    newSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    return () => newSocket.close();
  }, [setSocket, lessonId]);

  const sendMessage = () => {
    if (input.trim() && socket) {
    if (input.trim() && socket) {
      const message = { user: 'student', text: input };
      socket.send(JSON.stringify(message)); // Send message through WebSocket
      setMessages([...messages, message]);
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.user}: {message.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
