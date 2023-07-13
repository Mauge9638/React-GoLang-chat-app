import { useState } from "react";

export function Input() {
  const takeInput = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      setInput(event.currentTarget.value);
      event.preventDefault();
      setTextAreaValue("");
    }
  };

  const [textAreaValue, setTextAreaValue] = useState("");
  const [input, setInput] = useState("No input yet");
  return (
    <div className="border-2 border-black border-solid bg-red-500 row-span-1">
      <textarea
        className="p-2 w-full h-3/4 text-left resize-none"
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
