import { http } from "@/infra/http/http-client"
import { loginSchema, type LoginFormData } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { setAcessToken } from "../storage/auth-storage"
import { ApiError } from "@/infra/http/api-error"

export function useFormLogin() {
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur'
    })

    const onSubmit = async (data: LoginFormData) => {
        try {
            const responseData = await http.post<{ token: string }>('auth/login', data)
            setAcessToken(responseData.token)
            navigate("/feed")
        } catch (error) {
            if (error instanceof ApiError){
							setAuthError(error.message)
						}
						console.log(error)
        }
    }

    return {
        state: { showPass, setShowPass },
        onSubmit,
        useForm: { register, handleSubmit, errors, isSubmitting, isValid }
    }
}
function setAuthError(message: string) {
	throw new Error("Function not implemented.")
}

