export interface ILoginData {
    email: string;
    password: string;
}

export interface IAuthState {
    id: string;
    createdAt: string;
    updatedAt: string;
    nickname: string;
    email: string;
}

export interface ILoginInputs {
    email: string;
    password: string;
}

export interface IRegistrationData {
    email: string;
    nickname: string;
    password: string;
    repeatPassword: string;
} 

export interface IUpdateInputs { 
    email?: string;
    nickname?: string;
    password?: string;
}

export interface IAuthActions {
    login: (data: ILoginInputs) => any;
    register: (data: IRegistrationData) => any;
    logout: () => any;
    getProfile: () => any;
    updateProfile: (data: IUpdateInputs) => any;
}

export interface IAuthApi {
    getAccessToken: () => string | null;
    saveTokenStorage: (accessToken: string) => void;
    removeFromStorage: () => void;
    login: (data: ILoginInputs) => any;
    register: (data: IRegistrationData) => any;
    logout: () => any;
    getProfile: () => any;
    updateProfile: (data: IUpdateInputs) => any;
}

export type IAuthStore = IAuthState & IAuthActions;

export  const initData: IAuthState = {
    id: "",
    createdAt: "",
    updatedAt: "",
    nickname: "",
    email: ""
}

