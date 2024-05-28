import { ITrain } from "types";

export interface IEmbedding {
    type: "train" | "button",
    content: ITrain[]
}

export interface IMessageContent {
    text: string;
    embeddings: IEmbedding[];
}

export interface IMessage {
    id: string;
    dateTime: string;
    fromUser: boolean;
    content: IMessageContent;
}

export interface IMessageProps {
    data: IMessage;
}

export interface IEmbeddingProps {
    data: IEmbedding[];
}