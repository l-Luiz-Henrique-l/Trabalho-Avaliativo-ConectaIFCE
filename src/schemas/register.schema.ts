import {z} from 'zod'

export const registerSchema = z.object({
	firstName: z.string().trim().min(2, 'O nome deve ter pelo menos dois caracteres'),
	lastName: z.string().trim().min(2, 'O sobrenome é muito curto'),
	email: z.email('Email invalido!').endsWith('ifce.edu.br', 'Use seu email institucional'),
	role: z.enum(['student', 'professor', 'technician']),
	campus: z.enum(['taua', 'boa_viagem', 'fortaleza']),
	password: z.string().min(8, 'Minimo de 8 caracteres').regex(/[A-Za-z]/,
		'Precisa ter letras').regex(/[0-9]/, 'Precisa ter números')
})

export type RegisterFormData = z.infer<typeof registerSchema>
