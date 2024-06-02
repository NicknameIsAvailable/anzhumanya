"use client"

import { createContext, FC, ReactNode } from "react";
import { useAuthStore } from "./lib";
import { IAuthState } from "./model";

const AuthContext = createContext<IAuthState | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({
    children
}) => {
    const authStore = useAuthStore();

    return (
        <AuthContext.Provider value={authStore}>
            {children}
        </AuthContext.Provider>
    );
}