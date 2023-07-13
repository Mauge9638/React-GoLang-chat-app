import { useState } from "react";
import { ChatMessage } from "../types/ChatMessage";

export function Chat() {
  const userColors = { John: "red", Jane: "blue" };

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "someid1", message: "Hello", sender: "John", timestamp: new Date() },
    {
      id: "someid2",
      message: "Hi",
      sender: "Jane",
      timestamp: new Date(),
    },
    {
      id: "someid3",
      message: "How are you?",
      sender: "John",
      timestamp: new Date(),
    },
    {
      id: "someid4",
      message:
        "This is a very long message that should wrap around, so that it doesn't overflow the container. Let's see if it works. It should work. I hope it works. I think it works. It works. This is a very long message that should wrap around, so that it doesn't overflow the container. Let's see if it works. It should work. I hope it works. I think it works. It works. This is a very long message that should wrap around, so that it doesn't overflow the container. Let's see if it works. It should work. I hope it works. I think it works. It works.  This is a very long message that should wrap around, so that it doesn't overflow the container. Let's see if it works. It should work. I hope it works. I think it works. It works. This is a very long message that should wrap around, so that it doesn't overflow the container. Let's see if it works. It should work. I hope it works. I think it works. It works.",
      sender: "Jane",
      timestamp: new Date(),
    },
    {
      id: "someid5",
      message: "Good to hear",
      sender: "John",
      timestamp: new Date(),
    },
    { id: "someid6", message: "Bye", sender: "Jane", timestamp: new Date() },
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
          {chatMessage.sender}, <br />
          at {chatMessage.timestamp.toLocaleTimeString()}:
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
        message: "Hello",
        sender: "John",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="border-2 border-black border-solid row-span-3 h-full overflow-y-hidden">
      <button onClick={addChatMessage}>Test</button>
      <ul className="max-h-full overflow-hidden">{chat}</ul>
    </div>
  );
}
