import { loginSchema, type LoginFormData } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ApiError } from "@/infra/http/api-error"
import { loginUser } from "../services/login.service"
import { useAuth } from "../contexts/AuthContext"

export function useFormLogin() {
    const [loginError, setLoginError] = useState<string | null>(null)
    const [showPass, setShowPass] = useState<boolean>(false)
    const navigate = useNavigate()
		const {setAuthUser} = useAuth()

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur'
    })

    const onSubmit = async (data: LoginFormData) => {
        setLoginError(null)
        try {
            const responseData = await loginUser(data)
						setAuthUser(responseData.user)
            navigate("/feed")
        } catch (error) {
            if (error instanceof ApiError) {
                setLoginError(error.message)
            } else {
                setLoginError("Ocorreu um erro inesperado ao realizar o login.")
            }
        }
    }

    return {
        state: {
            showPass,
            setShowPass,
            loginError
        },
        onSubmit,
        useForm: {
            register,
            handleSubmit,
            isSubmitting,
            errors,
            isValid
        }
    }
}
