import { Chat } from "../components/Chat";
import { Input } from "../components/Input";
import { Users } from "../components/Users";

export function Index() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-500 grid grid-cols-4">
      <div className="grid grid-rows-4 h-screen col-span-3">
        <div className="h-full row-span-3 overflow-y-auto border-2 border-black border-solid">
          <Chat />
        </div>
        <Input />
      </div>
      <div className="h-full col-span-1">
        <Users />
      </div>
    </div>
  );
}
