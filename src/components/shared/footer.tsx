import React from 'react'
import Brand from './brand'

function Footer() {
	return (
		<footer className='border-t border-border bg-card'>
			<div className='container-main py-12'>
				<div className='grid grid-cols-4'>
						<div>
							<a href="/">
								<Brand />
								<p className='flex mt-3 text-sm text-muted-foreground text-balance leading-relaxed'>
									Rede social academica do IFCE.
									Conectando a comunidade para crescer juntos.
								</p>
							</a>
						</div>

					<div>
						<h3 className='text-foreground font-semibold text-sm mb-3'>
							Plataforma
						</h3>
						<ul className='flex flex-col gap-2'>
							<li>
								<a href="/feed" className='text-muted-foreground text-sm font-medium houver:text-primary'>
								Feed Academico</a>
							</li>
							<li>
								<a href="/groups" className='text-muted-foreground text-sm font-medium houver:text-primary'>Grupos de Estudo</a>
							</li>
							<li>
								<a href="/profile" className='text-muted-foreground text-sm font-medium houver:text-primary'>Perfil</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-foreground font-semibold text-sm mb-3'>
							Institucional
						</h3>
						<ul className='flex flex-col gap-2'>
							<li>
								<a href="https://portal.ifce.edu.br" className='text-muted-foreground text-sm font-medium houver:text-primary'>Feed Academico</a>
							</li>
							<li>
								<a href="/about" className='text-muted-foreground text-sm font-medium houver:text-primary'>Sobre</a>
							</li>
							<li>
								<a href="/contact" className='text-muted-foreground text-sm font-medium houver:text-primary'	>Contato</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-foreground font-semibold text-sm mb-3'>
							Legal
						</h3>
						<ul className='flex flex-col gap-2'>
							<li>
								<a href="#" className='text-muted-foreground text-sm font-medium houver:text-primary'>Termos de Uso</a>
							</li>
							<li>
								<a href="#" className='text-muted-foreground text-sm font-medium houver:text-primary'>Privacidade</a>
							</li>
						</ul>
					</div>

				</div>

				<div className='border-t border-border mt-10 pt-6'>
				<p className='text-center text-xs text-muted-foreground'>2026Conecta IFCE. Instituto Federal do Ceará. Alguns direitos reservados</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
