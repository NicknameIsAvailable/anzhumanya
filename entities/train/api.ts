import { apiWithAuth } from "../api";
import { ITrainApi } from "./model";

export const chatApi: ITrainApi = {
    getTrains: () => apiWithAuth.get("/api/"),
    getOneTrain: () => apiWithAuth.get("/api/"),
    getOneStep: () => apiWithAuth.get("/api/"),
    deleteTrain: () => apiWithAuth.get("/api/"),
    editTrain: () => apiWithAuth.get("/api/"),
    embeddingFunction: () => apiWithAuth.get("/api/")
}