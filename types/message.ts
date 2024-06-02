import { ITrain } from "types";

export interface IEmbeddingButton {
    text: string;
    function: string;
}

export interface IEmbedding {
    type: "train" | "button",
    content: ITrain[] | IEmbeddingButton
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