export type TDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export interface ITrainStep {
    name: string;
    description: string;
    reps: number;
    sets: number;
    restTime: number;
}

export interface ITrain {
    id: string;
    name: string;
    description: string;
    day: TDay;
    steps: ITrainStep[];
}   