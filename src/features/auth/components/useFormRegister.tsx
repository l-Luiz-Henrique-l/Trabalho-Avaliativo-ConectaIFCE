import { registerSchema, type RegisterFormData } from "@/schemas/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export function useFormRegister() {
	const [campuses, setCampuses] = useState<Array<{
		id: string,
		name: string
	}>>([])

	const navigate = useNavigate()

	useEffect(() => {
		async function fetchCampuses(){
			const response = await fetch('https://conectaifce-api.proflucasmendes.com.br/campuses')
			if(response.ok){
				const data = await response.json()
				setCampuses(data)
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

		const response = await fetch ('https://conectaifce-api.proflucasmendes.com.br/auth/register', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(payload)
		})

		if(response.ok){
			const responseData = await response.json()
			console.log(data)
			localStorage.setItem('acess_token', responseData.token)
			navigate("/feed")
		}

	}
	const [showPass, setShowPass] = useState<boolean>(false)

	return {
		state: {
			showPass,
			setShowPass,
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
