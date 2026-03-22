import { http } from "@/infra/http/http-client"
import { registerSchema, type RegisterFormData } from "@/schemas/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { use, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import type { tr } from "zod/locales"
import { useAuth } from "../contexts/AuthContext"
import { ApiError } from "@/infra/http/api-error"
import { getCampuses, registerUser } from "../services/register.service"

export function useFormRegister() {
	const [campuses, setCampuses] = useState<Array<{
		id: string,
		name: string
	}>>([])
	const {setAuthUser} = useAuth()
	const [registerError, setRegisterError] = useState<string | null>(null)

	const navigate = useNavigate()

	useEffect(() => {
		async function fetchCampuses(){
			try {
				const  campuses = await getCampuses()
				setCampuses(campuses)
			} catch (error) {
				if (error instanceof ApiError){
				setRegisterError(error.message)
										}

			}

		}
		fetchCampuses()
	}, [])

		const {register, handleSubmit, control,
			formState: {errors, isSubmitting, isValid}, watch}= useForm<RegisterFormData>({
			resolver: zodResolver(registerSchema),
			mode: 'onBlur'
		})

	const onSubmit = async (data: RegisterFormData) => {
		const { course, ...rest} = data
		const payload = data.role === 'student' ? data : rest

		try {

			const responseData = await registerUser(payload)
			setAuthUser(responseData.user)
			navigate("/feed")
		} catch (error) {
			console.log(error)
		}

	}
	const [showPass, setShowPass] = useState<boolean>(false)

	return {
		state: {
			showPass,
			setShowPass,
			registerError,
			campuses
		},
		onSubmit,
		useForm: {
			register,
			handleSubmit,
			control,
			isSubmitting,
			errors,
			isValid,
			watch
		}
	}
}
