import { create } from "zustand";
import { initData, TChatStore } from "./model";

export const chatStore = create<TChatStore>((set) => ({
    ...initData,
    getChat: () => initData,
    sendMessage: () => [],
    clearChat: () => {},
    embeddingFunction: (name: string) => 1,
}));