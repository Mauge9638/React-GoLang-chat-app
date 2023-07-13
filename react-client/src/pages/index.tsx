import { Chat } from "../components/Chat";
import { Input } from "../components/Input";
import { Users } from "../components/Users";

export function Index() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-500 grid-cols-4 grid">
      <div className="grid grid-rows-4 h-full col-span-3">
        <Chat />
        <Input />
      </div>
      <div className="h-full col-span-1">
        <Users />
      </div>
    </div>
  );
}
