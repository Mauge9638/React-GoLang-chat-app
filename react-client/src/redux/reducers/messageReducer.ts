// src/redux/reducers/messageReducer.js
import { ChatMessage } from "../../types/ChatMessage";
import { ADD_MESSAGE } from "../actions/messageActions";

export const messageReducer = (
  state = [],
  action: { type: string; message: ChatMessage }
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, { message: action.message }];
    default:
      return state;
  }
};
