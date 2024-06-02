import { IMessage } from "types";
import { IChat } from "types/chat";

export const initData: IChat = {
    id: "",
    messages: []
}

export interface IChatActions {
    getChat: () => IChat;
    sendMessage: () => IMessage[];
    clearChat: () => void;
    embeddingFunction: (name: string) => any;
}

export type TChatStore = IChat & IChatActions;

export interface IChatApi {
    getChat: () => any;
    sendMessage: () => any;
    clearChat: () => any;
    embeddingFunction: () => any; 
}
