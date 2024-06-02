import { IMessage } from "./message";

export interface IChat {
    id: string;
    messages: IMessage[]
}