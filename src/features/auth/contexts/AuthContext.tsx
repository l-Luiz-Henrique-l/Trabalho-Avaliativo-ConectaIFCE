import { Children, createContext, useContext, useState, type ReactNode } from "react";
import { clearStoreUser, getStoreUser, setStoreUser, type AuthUser } from "../storages/userAuth.storage";

type AuthContextType = {
	isAuthenticad: boolean,
	authUser: AuthUser | null,
	setAuthUser: (user: AuthUser) => void,
	clearAuthUser: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children}: {children: ReactNode}){
	const [authUser, setAuthUser] = useState<AuthUser | null>(() =>
		getStoreUser(),
	)

	function setUser(user: AuthUser){
		setStoreUser(user)
		setAuthUser(user)
	}

	function clearUser(){
		clearStoreUser()
		setAuthUser(null)
	}

		return (
			<AuthContext value={{
				isAuthenticad: authUser !== null,
				authUser,
				setAuthUser: setUser,
				clearAuthUser: clearUser

			}}>
				{children}
			</AuthContext>
		)

}

export function useAuth(): AuthContextType {
	const context = useContext(AuthContext)
	if(!context){
		throw Error('O contexto não pode ser acessado fora do AuthProvider')
	}
	return context
}

