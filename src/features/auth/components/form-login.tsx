import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormLogin } from "@/features/auth/components/useFormLogin";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";

function FormLogin() {
	const { state, onSubmit, useForm } = useFormLogin();

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={useForm.handleSubmit(onSubmit)}
		>
			<div className="flex flex-col gap-2">
				<Label htmlFor="email" className="text-foreground">
					E-mail Institucional
				</Label>

				<Input
					id="email"
					type="email"
					placeholder="seu.nome@ifce.edu.br"
					className="h-11 bg-background"
					{...useForm.register("email")}
				/>

				{useForm.errors.email && (
					<p className="text-xs text-destructive">
						{useForm.errors.email.message}
					</p>
				)}
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<Label htmlFor="password" className="text-foreground">
						Senha
					</Label>

					<a href="/recover" className="text-primary text-sm">
						Esqueceu a senha?
					</a>
				</div>

				<div className="relative">
					<Input
						id="password"
						type={state.showPass ? "text" : "password"}
						placeholder="Digite sua senha"
						className="h-11 bg-background"
						{...useForm.register("password")}
					/>

					<button
						type="button"
						onClick={() =>
							state.setShowPass((prev: boolean) => !prev)
						}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
					>
						{state.showPass ? (
							<EyeOffIcon className="size-4" />
						) : (
							<EyeIcon className="size-4" />
						)}
					</button>
				</div>

				{useForm.errors.password && (
					<p className="text-xs text-destructive">
						{useForm.errors.password.message}
					</p>
				)}
			</div>

			<Button
				type="submit"
				className="mt-2 h-11"
				disabled={useForm.isSubmitting || !useForm.isValid}
			>
				{useForm.isSubmitting ? (
					<span className="flex items-center gap-2">
						<Loader2Icon className="size-4 animate-spin" />
						Entrando...
					</span>
				) : (
					"Entrar"
				)}
			</Button>

			{state.loginError && (
				<p className="text-xs text-destructive">
					{state.loginError}
				</p>
			)}
		</form>
	);
}

export default FormLogin;
