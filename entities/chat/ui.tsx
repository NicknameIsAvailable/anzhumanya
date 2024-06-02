import { createContext, FC, ReactNode } from "react";
import { chatStore } from "./lib";
import { TChatStore } from "./model";

export const ChatContext = createContext<TChatStore | undefined>(undefined);

export const CategoryProvider: FC<{ children: ReactNode }> = ({
    children
}) => {
    const categoryStore = chatStore();

    return (
        <ChatContext.Provider value={categoryStore}>
            {children}
        </ChatContext.Provider>
    );
}