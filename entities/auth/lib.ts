import { toast } from "sonner";
import { create } from "zustand";
import { api } from "@/entities/api";
import { authApi } from "./api";
import { IAuthStore, ILoginData, ILoginInputs, initData, IRegistrationData, IUpdateInputs } from "./model";

export const authService = {
	async main(type: 'login' | 'register', data: ILoginData | IRegistrationData) {
		const response = await api.post(
			`/auth/${type}`,
			data
		)

		if (response.data.accessToken) authApi.saveTokenStorage(response.data.accessToken)

		return response
	},

	async getNewTokens() {
		const response = await api.post(
			'/auth/login/access-token'
		)

		if (response.data.accessToken) authApi.saveTokenStorage(response.data.accessToken)
		return response
	},
}

export const useAuthStore = create<IAuthStore>((set) => ({
    ...initData,
    login: async (data: ILoginInputs) => {
        try {
            const res = await authApi.login(data);
            set((state: IAuthStore) => {
                authApi.saveTokenStorage(res.data.accessToken);
                return { ...state, ...res.data.user };
            });
            return res;
        } catch (err) {
            toast("Не удалось авторизоваться", {
                description: "Попробуйте еще раз"
            });
            console.log("err: ",err);
        }
    },
    register: async (data: IRegistrationData) => {
        try {
            const res = await authApi.register(data);
            set((state: IAuthStore) => {
                authApi.saveTokenStorage(res.data.accessToken);
                return { ...state, ...res.data.user };
            });
            return res;
        } catch (err) {
            toast("Не удалось зарегистрироваться", {
                description: "Попробуйте еще раз"
            });
            console.log(err);
        }
    },
    logout: async () => {
        try {
            const res = await authApi.logout();
		    if (res.data) authApi.removeFromStorage()
            return res;
        } catch (err) {
            toast("Не удалось зарегистрироваться", {
                description: "Попробуйте еще раз"
            });
            console.log(err);
        }
    },
    getProfile: async () => {
        try {
            const res = await authApi.getProfile();
            set((state: IAuthStore) => {
                return {...state, ...res.data}
            })
            return res;
        } catch (err) {
            toast("Не удалось получить профиль", {
                description: "Вы авторизованы?"
            })
            console.log(err);
        }
    },
    updateProfile: async (data: IUpdateInputs) => {
        try {
            const res = await authApi.updateProfile(data);

            set((state: IAuthStore) => {
                return {...state, ...res.data}
            })
            toast("Профиль обновлен")
            return res;
        } catch (err) {
            toast("Не удалось получить профиль", {
                description: "Вы авторизованы?"
            })
            console.log(err);
        }
    }
}));
