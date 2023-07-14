import { useState } from "react";
import { Chat } from "../components/Chat";
import { Input } from "../components/Input";
import { Users } from "../components/Users";
import { UserDictionary } from "../types/Users";

export function Index() {
  const [users, setUsers] = useState<UserDictionary>({
    someid: { id: "someid", name: "John", color: "red" },
    someid2: { id: "someid2", name: "Jane Solomon", color: "blue" },
  });
  const addUser = () => {
    const id = `someid${new Date().getTime()}`;
    setUsers({
      ...users,
      [id]: { id: id, name: "Jane Solomon", color: "blue" },
    });
  };
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-b from-[#2B4162] to-[#12100E] grid grid-cols-4 text-white">
        <div className="grid grid-rows-4 h-screen col-span-3">
          <div className="h-full row-span-3 overflow-y-auto border-b-2 border-black border-solid p-2">
            <Chat />
            <button onClick={addUser}>Add user</button>
          </div>
          <Input />
        </div>
        <div className="h-screen col-span-1 border-l-2 border-black border-solid">
          <h1 className="text-xl border-b-2 border-amber-600 text-left p-2">
            Users
          </h1>
          <div className="h-[calc(100%-50px)] overflow-y-auto">
            <Users users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}
