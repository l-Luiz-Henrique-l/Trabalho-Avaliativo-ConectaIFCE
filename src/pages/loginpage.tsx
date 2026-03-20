import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import { useFormLogin } from '@/features/auth/components/useFormLogin'

function Loginpage() {
    const { state, onSubmit, useForm } = useFormLogin()

    return (
        <section className='flex-1 flex items-center justify-center py-20'>
            <Card className='max-w-md border-border w-full'>
                <CardHeader className='text-center'>
                    <CardTitle className='text-2xl font-bold text-foreground'>Bem-Vindo de volta</CardTitle>
                    <CardDescription className='text-muted-foreground'>Entre com seu email institucional</CardDescription>
                </CardHeader>

                <CardContent>
                    <form className='flex flex-col gap-4' onSubmit={useForm.handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='email'>Email Institucional</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='seu.nome@ifce.edu.br'
                                {...useForm.register('email')}
                                className='h-11 bg-background'
                            />
                            {useForm.errors.email && <p className='text-xs text-destructive'>{useForm.errors.email.message}</p>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <Label htmlFor='password'>Senha</Label>
                                <a href="/recover" className='text-primary text-sm'>Esqueceu a Senha?</a>
                            </div>
                            <div className='relative'>
                                <Input
                                    id='password'
                                    type={state.showPass ? "text" : "password"}
                                    placeholder='Digite sua senha'
                                    {...useForm.register('password')}
                                    className='h-11 bg-background'
                                />
                                <button
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary'
                                    type='button'
                                    onClick={() => state.setShowPass(!state.showPass)}
                                >
                                    {state.showPass ? <EyeOffIcon className='size-4'/> : <EyeIcon className='size-4'/>}
                                </button>
                            </div>
                            {useForm.errors.password && <p className='text-xs text-destructive'>{useForm.errors.password.message}</p>}
                        </div>

                        <Button type="submit" className='mt-2 h-11' disabled={useForm.isSubmitting || !useForm.isValid}>
                            {useForm.isSubmitting ? <Loader2Icon className='size-4 animate-spin'/> : "Entrar"}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className='border-t border-border'>
                    <p className='text-sm text-muted-foreground text-center w-full'>
                        Não tem conta? <a href="/register" className='text-primary'>Criar Conta</a>
                    </p>
                </CardFooter>
            </Card>
        </section>
    )
}

export default Loginpage
