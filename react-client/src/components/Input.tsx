import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/actions/messageActions";

export function Input() {
  const dispatch = useDispatch();
  const takeInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      dispatch(
        addMessage({
          id: "somechatid",
          message: event.currentTarget.value,
          sender: { id: "someid", name: "John", color: "red" },
          timestamp: new Date(),
        })
      );
      setInput(event.currentTarget.value);
      event.preventDefault();
      setTextAreaValue("");
    }
  };

  const [textAreaValue, setTextAreaValue] = useState("");
  const [input, setInput] = useState("No input yet");
  return (
    <div className="row-span-1 p-2 text-black">
      <textarea
        className="p-2 w-full h-3/4 text-left resize-none rounded-md "
        onKeyDown={takeInput}
        onChange={(event) => {
          setTextAreaValue(event.currentTarget.value);
        }}
        value={textAreaValue}
        inputMode="text"
      />
      <textarea value={input} />
    </div>
  );
}
