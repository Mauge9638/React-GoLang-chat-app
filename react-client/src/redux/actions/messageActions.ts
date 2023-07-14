import { ChatMessage } from "../../types/ChatMessage";

export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (message: ChatMessage) => ({
  type: ADD_MESSAGE,
  message,
});
