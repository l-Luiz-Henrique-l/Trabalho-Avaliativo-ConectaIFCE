
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import React from 'react'
import { useFormRegister } from './useFormRegister'
import { Controller } from "react-hook-form";

function FormRegister() {

	const { state, onSubmit, useForm } = useFormRegister()
	return (
		<form className='flex flex-col gap-4' onSubmit={useForm.handleSubmit(onSubmit)}>
					<div className='flex items-center gap-4'>
					<div className='flex flex-col gap-2'>
							<Label htmlFor='firstName' className='text-foreground'>
								Nome
							</Label>
							<Input id='firstName' type='text' placeholder='Seu nome' required
							className='h-11 bg-background'
							{...useForm.register('firstName')}
							/>
							{useForm.errors.firstName && (
								<p className='text-xs text-destructive'>
									{useForm.errors.firstName.message}
								</p>
							)}
						</div>

						<div className='flex flex-col gap-2'>
							<Label htmlFor='lastName' className='text-foreground'>
								Sobrenome
							</Label>
							<Input id='lastName' type='text' placeholder='Seu sobrenome' required
							className='h-11 bg-background'
							{...useForm.register('lastName')}
							/>
							{useForm.errors.lastName && (
								<p className='text-xs text-destructive'>
									{useForm.errors.lastName.message}
								</p>
							)}
						</div>
						</div>

							<div className='flex flex-col gap-2'>
							<Label htmlFor='handle' className='text-foreground'>
								Nome de Usuário
							</Label>
							<Input id='handle' type='text' placeholder='Seu nome de Usuário' required
							className='h-11 bg-background'
							{...useForm.register('handle')}
							/>
							{useForm.errors.handle && (
								<p className='text-xs text-destructive'>
									{useForm.errors.handle.message}
								</p>
							)}
						</div>

						<div className='flex flex-col gap-2'>
							<Label htmlFor='email' className='text-foreground'>
								Email Institucional
							</Label>
							<Input id='email' type='email' placeholder='seu.nome@ifce.edu.br' required
							className='h-11 bg-background'
							{...useForm.register('email')}
							/>
							{useForm.errors.email && (
								<p className='text-xs text-destructive'>
									{useForm.errors.email.message}
								</p>
							)}

						</div>

						<div className='flex flex-col gap-2'>
							<Label htmlFor='role' className='text-foreground'>
								Vinculo
							</Label>

							<Controller name='role' control={useForm.control} render= {({field})=>(
								<Select required onValueChange={field.onChange} value={field.value ?? ""}>
								<SelectTrigger className='bg-background w-full h-11' id='role'>
									<SelectValue placeholder="Selecione seu vinculo com o IFCE" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='student'>Estudante</SelectItem>
									<SelectItem value='professor'>Docente</SelectItem>
									<SelectItem value='technician'>Técnico</SelectItem>
								</SelectContent>
							</Select>
							)} />

							{useForm.errors.role && (
								<p className='text-xs text-destructive'>
									{useForm.errors.role.message}
								</p>
							)}
						</div>

					<div className='flex flex-col gap-2'>
							<Label htmlFor='campus' className='text-foreground'>
								Campus
							</Label>

							<Controller name='campus' control={useForm.control} render={({field})=> (
								<Select onValueChange={field.onChange} value={field.value ?? ""}>
								<SelectTrigger className='bg-background w-full h-11' id='campus'>
									<SelectValue placeholder="Selecione seu Campus" />
								</SelectTrigger>
								<SelectContent>
									{ state.campuses && state.campuses.map(campus => (
										<SelectItem value= {campus.id} key={campus.id}> {campus.name} </SelectItem>
									))}
									</SelectContent>
								</Select>
							)}/>

								{useForm.errors.campus && (
								<p className='text-xs text-destructive'>
									{useForm.errors.campus.message}
								</p>
							)}

						</div>

							{useForm.watch('role') === 'student' && (
							<div className='flex flex-col gap-2'>
							<Label htmlFor='course' className='text-foreground'>
								Curso
							</Label>
							<Input id='course' type='text' placeholder='Seu nome do seu curso' required
							className='h-11 bg-background'
							{...useForm.register('course')}
							/>
							{useForm.errors.course && (
								<p className='text-xs text-destructive'>
									{useForm.errors.course.message}
								</p>
							)}
						</div>
							)}




						<div className='flex flex-col gap-2'>
							<Label htmlFor='password' className='text-foreground'>Senha</Label>
							<div className='relative'>
							<Input id='password' type={state.showPass ? "text" : "password"} required
							className='h-11 bg-background' placeholder='Digite sua senha'
							{...useForm.register('password')}
							/>

							<button className='absolute right-3 top-1/2 -translate-y-1/2
							text-muted-foreground houver:text-primary' type='button'
							onClick={()=> state.setShowPass(prev => !prev)}>

								{state.showPass ? <EyeOffIcon className='size-4'/> : <EyeIcon className='size-4'/>}
							</button>
							</div>

								{useForm.errors.password && (
								<p className='text-xs text-destructive'>
									{useForm.errors.password.message}
								</p>
							)}

							<p className='text-xs text-foreground'>
								Mínimo de 8 caracteres com letras e números
							</p>
						</div>

						<Button type="submit" className='mt-2 h-11' disabled={useForm.isSubmitting || !useForm.isValid}>
							{
								useForm.isSubmitting ? (
									<span className='flex items-center gap-4'>
											<Loader2Icon className='size-4 animate-spin'/>
									</span>
								) : "Criar Conta"
							}
						</Button>
						{state.registerError && (
							<p className='text-xs text-destructive'>
									{state.registerError}
							</p>
						)}
					</form>
	)
}

export default FormRegister
