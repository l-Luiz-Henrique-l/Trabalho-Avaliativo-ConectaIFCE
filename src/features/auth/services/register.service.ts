import { http } from "@/infra/http/http-client"
import type { AuthUser } from "../components/storages/userAuth.storage"
import type { RegisterFormData } from "@/schemas/register.schema";
import { setAcessToken } from "../components/storages/token-storage";


type CampusType = {
  id: string,
  name: string
}
export type UserRequestDTO = RegisterFormData;

type UserResponseDTO = {
  token: string,
  user: AuthUser
}

export async function getCampuses(): Promise<Array<CampusType>> {
  const campuses = await http.get<Array<CampusType>>('campuses')
  return campuses
}

export async function registerUser(user: UserRequestDTO): Promise<UserResponseDTO> {
    const responseData = await http.post<UserResponseDTO>('auth/register', user)
    setAcessToken(responseData.token)

    return responseData
}
