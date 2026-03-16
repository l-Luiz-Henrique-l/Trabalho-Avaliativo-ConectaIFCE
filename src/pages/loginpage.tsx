import Brand from '@/components/shared/brand'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

function Loginpage() {

	const [showPass, setShowPass] = useState<boolean>(false)

	return (
		<section className='flex-1 flex item-center justify-center py-20'>
			<Card className='max-w-md border-border w-md'>
				<CardHeader className='text-center'>

					<div className='w-full flex justify-center mb-4'>
					<Brand />
					</div>

					<CardTitle className='text-2xl font-bold text-foreground'>
						Bem-Vindo de volta
					</CardTitle>
					<CardDescription className='text-muted-foreground'>
						Entre com seu email institucional
					</CardDescription>
				</CardHeader>

				<CardContent>
					<form className='flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='email' className='text-foreground'>
								Email Institucional
							</Label>
							<Input id='email' name='email' type='email' placeholder='seu.nome@ifce.edu.br' required
							className='h-11 bg-background'/>
						</div>


						<div className='flex flex-col gap-2'>
							<div className='flex items-center justify-between'>
								<Label htmlFor='password' className='text-foreground'>Senha</Label>
								<a href="/recover" className='text-primary text-sm'>Esqueceu a Senha?</a>
							</div>
							<div className='relative'>
							<Input id='password' name='password' type={showPass ? "text" : "password"} required
							className='h-11 bg-background' placeholder='Digite sua senha'/>

							<button className='absolute right-3 top-1/2 -translate-y-1/2
							text-muted-foreground houver:text-primary' type='button'
							onClick={()=> setShowPass(prev => !prev)}>

								{showPass ? <EyeOffIcon className='size-4'/> : <EyeIcon className='size-4'/>}
							</button>
							</div>
						</div>

						<Button type="submit" className='mt-2 h-11'>
							Entrar
						</Button>
					</form>
				</CardContent>

				<CardFooter className='border-t border-border'>
					<p className='text-sm text-muted-foreground text-center w-full '>Não tem conta?
						<a href="/register" className='text-primary'>Criar Conta</a></p>
				</CardFooter>
			</Card>
		</section>
	)
}

export default Loginpage
