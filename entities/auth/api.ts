import Cookies from 'js-cookie';
import { IAuthApi, ILoginInputs, IRegistrationData, IUpdateInputs } from './model';
import { api, apiWithAuth } from '../api';

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken'
}

export const authApi: IAuthApi = {
    getAccessToken: () => {
        const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
        return accessToken || null
    },
    saveTokenStorage: (accessToken: string) => {
        Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
            domain: process.env.EXPO_PUBLIC_DOMAIN,
            sameSite: 'strict',
            expires: 1
        })
    },
    removeFromStorage: () => {
        Cookies.remove(EnumTokens.ACCESS_TOKEN)
    },
    login: async (data: ILoginInputs) => (await api.post("/auth/login", data)),
    register: async (data: IRegistrationData) => (await api.post("/auth/register", data)),
	logout: async () => (await api.post<boolean>('/auth/logout')),
    getProfile: async () => (await apiWithAuth.get("/user/profile")),
    updateProfile: async (data: IUpdateInputs) => (await apiWithAuth.put("/user/profile", data))
}
