import axios, { CreateAxiosDefaults } from "axios";
import { authApi, authService } from "@/entities/auth";
import { errorCatch } from "./lib";

const options: CreateAxiosDefaults = {
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
}

const api = axios.create(options)

const apiWithAuth = axios.create(options)

apiWithAuth.interceptors.request.use(config => {
    const accessToken = authApi.getAccessToken();

    if (config?.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config;
})

apiWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 || 
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided' &&
            error.config &&
            !error.config._isRetry
            ) 
        ) {
            originalRequest._isRetry = true

            try {
                await authService.getNewTokens()
                return apiWithAuth.request(originalRequest)
            } 
            catch (error) {
                if (errorCatch(error) === 'jwt expired') authApi.removeFromStorage()
            }
        }

        throw error
    }
)

export { api, apiWithAuth }