import { apiWithAuth } from "../api";
import { IChatApi } from "./model";

export const chatApi: IChatApi = {
    getChat: () => apiWithAuth.get("/api/"),
    sendMessage: () => apiWithAuth.get("/api/"),
    clearChat: () => apiWithAuth.get("/api/"),
    embeddingFunction: () => apiWithAuth.get("/api/"),
}