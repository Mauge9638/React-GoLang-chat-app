/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ChatMessage } from "../types/ChatMessage";

export const Chat = () => {
  const userColors = { John: "red", ["Jane Solomon"]: "blue" };

  const messagesEndRef: MutableRefObject<Element | null> = useRef(null);

  const chatMessagesStore = useSelector(
    (state: { messages: { message: ChatMessage }[] }) => state.messages
  );

  const chatRedux = chatMessagesStore.map((chatMessage) => (
    <li
      key={chatMessage.message.sender.id}
      className="grid grid-cols-10 p-2 border-b-2 border-solid border-yellow-400"
    >
      <div
        className="col-span-1 overflow-clip text-left border-r-4 border-solid"
        style={{
          borderColor:
            userColors[(chatMessage.message.sender.name as "John") || "Jane"],
        }}
      >
        <div>
          <p
            className="border-b-2 border-solid w-fit"
            style={{
              borderColor:
                userColors[
                  (chatMessage.message.sender.name as "John") || "Jane"
                ],
            }}
          >
            {chatMessage.message.sender.name}:
          </p>
        </div>
      </div>
      <div className="resize-none col-span-9 text-left pl-1">
        {chatMessage.message.message}
      </div>
    </li>
  ));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessagesStore]);

  return (
    <div>
      <ul className="h-full max-h-full">{chatRedux}</ul>
      <div ref={messagesEndRef as LegacyRef<HTMLDivElement>} />
    </div>
  );
};
