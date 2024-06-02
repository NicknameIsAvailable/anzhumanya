import { create } from "zustand";
import { initData, TTrainStore } from "./model";

export const chatStore = create<TTrainStore>((set) => ({
    ...initData,
    getTrains: () => undefined,
    getOneTrain: (id: string) => undefined,
    getOneStep: (id: string) => undefined,
    deleteTrain: (id: string) => undefined,
    editTrain: (id: string) => undefined,
    startTrain: () => true,
    stopTrain: () => false, 
}));