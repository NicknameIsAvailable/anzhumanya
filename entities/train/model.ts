import { IMessage, ITrain, ITrainStep } from "types";

export interface ITrainState {
    isPending: boolean;
    trains: ITrain[];
    currentTrain?: ITrain;
}

export const initData: ITrainState = {
    isPending: false,
    trains: []
}

export interface ITrainActions {
    getTrains: () => ITrain[] | undefined;
    getOneTrain: (id: string) => ITrain | undefined;
    getOneStep: (id: string) => ITrainStep | undefined
    deleteTrain: (id: string) => void;
    editTrain: (id: string, data: ITrain) => ITrain | undefined 
    startTrain: () => boolean | undefined;
    stopTrain: () => boolean | undefined;
}

export type TTrainStore = ITrainState & ITrainActions;

export interface ITrainApi {
    getTrains: () => any;
    getOneTrain: (id: string) => any;
    getOneStep: (id: string) => any;
    deleteTrain: (id: string) => any;
    editTrain: (id: string, data: ITrain) => any;
    embeddingFunction: () => any; 
}
