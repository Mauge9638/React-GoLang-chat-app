import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChatMessage } from "../types/ChatMessage";

export function Chat() {
  const userColors = { John: "red", ["Jane Solomon"]: "blue" };

  const messagesEndRef: MutableRefObject<Element | null> = useRef(null);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "someid1", message: "Hello", sender: "John", timestamp: new Date() },
    {
      id: "someid2",
      message: "Hi",
      sender: "Jane Solomon",
      timestamp: new Date(),
    },
  ]);

  const chat = chatMessages.map((chatMessage) => (
    <li
      key={chatMessage.id}
      className="grid grid-cols-10 p-2 border-b-2 border-solid border-yellow-400"
    >
      <div
        className="col-span-1 overflow-clip text-left border-r-4 border-solid"
        style={{
          borderColor: userColors[(chatMessage.sender as "John") || "Jane"],
        }}
      >
        <div>
          <p className="text-xs">
            {chatMessage.timestamp.toLocaleTimeString()},
          </p>
          <p
            className="border-b-2 border-solid w-fit"
            style={{
              borderColor: userColors[(chatMessage.sender as "John") || "Jane"],
            }}
          >
            {chatMessage.sender}:
          </p>
        </div>
      </div>
      <div className="resize-none col-span-9 text-left pl-1">
        {chatMessage.message}
      </div>
    </li>
  ));

  const addChatMessage = () => {
    setChatMessages([
      ...chatMessages,
      {
        id: "someid7",
        message: `Hello - ${new Date().getTime()}`,
        sender: "John",
        timestamp: new Date(),
      },
    ]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div>
      <ul className="h-full max-h-full">{chat}</ul>
      <div ref={messagesEndRef as LegacyRef<HTMLDivElement>} />
      <button onClick={addChatMessage}>Test</button>
    </div>
  );
}
