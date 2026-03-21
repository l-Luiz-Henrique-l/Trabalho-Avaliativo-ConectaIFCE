import { http } from "@/infra/http/http-client"
import { setAcessToken } from "../storage/auth-storage"
import type { LoginFormData } from "@/schemas/login.schema"

type LoginRequestDTO = LoginFormData

type LoginResponseDTO = {
    token: string
    user: {
        email: string
        password: string
    }
}

export async function loginUser(credentials: LoginRequestDTO): Promise<LoginResponseDTO> {
    const responseData = await http.post<LoginResponseDTO>('auth/login', credentials)


    setAcessToken(responseData.token)

    return responseData
}
