import { http } from "@/infra/http/http-client"
import type { LoginFormData } from "@/schemas/login.schema"
import type { AuthUser } from "../components/storages/userAuth.storage"
import { clearAcessToken, setAcessToken } from "../components/storages/token-storage"

type LoginResponseDTO = {
    token: string
    user: AuthUser
}
export async function loginUser(credentials: LoginFormData): Promise<LoginResponseDTO> {
    const responseData = await http.post<LoginResponseDTO>('auth/login', credentials)

    setAcessToken(responseData.token)

    return responseData
}

export function logout(): void {
	clearAcessToken()
}
