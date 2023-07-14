import { User } from "./Users";

export interface ChatMessage {
  id: string;
  message: string;
  sender: User;
  timestamp: Date;
}
