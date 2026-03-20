import {z} from 'zod'

export const registerSchema = z.object({
	firstName: z.string().trim().min(2, 'O nome deve ter pelo menos dois caracteres'),
	lastName: z.string().trim().min(2, 'O sobrenome é muito curto'),
	handle: z.string().trim().min(3, 'O nome de usuario deve ter pelo mentos 3 caracteres').regex(/^[a-zA-Z0-9_]+$/, 'O nome de usuario deve conter apenas letras, numeros e underscores'),
	email: z.email('Email invalido!').endsWith('ifce.edu.br', 'Use seu email institucional'),
	role: z.enum(['student', 'professor', 'technician']),
	campus: z.string().nonempty(),
	course: z.string().trim().min(3, 'O nome do curso deve ter no minimo 3 caracteres').optional(),
	password: z.string().min(8, 'Minimo de 8 caracteres').regex(/[A-Za-z]/,
		'Precisa ter letras').regex(/[0-9]/, 'Precisa ter números')
})

export type RegisterFormData = z.infer<typeof registerSchema>
