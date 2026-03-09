import React from 'react'
import { Card } from '../ui/card'
import { CardContent } from '../ui/card'
import { BookOpen, FolderSearch, icons, Trophy, Users } from 'lucide-react'

const features = [
	{
		icons: Users,
		title: 'Faça parte da rede',
		description: 'Conecte-se com colegas de curso, professores, tecnicos do IFCE. Amplie sua rede de contatos academicos'
	},

	{
		icons: FolderSearch,
		title: 'Encontre parceiros',
		description: 'Descubra pessoas com interesses semelhantes para formar grupos de estudo e desenvolver projetos juntos'
	},
	{
		icons: Trophy,
		title: 'Compartilhe conquistas ',
		description: 'Celebre seus resultados academicos, certificações e premios com toda a comunidade institucional'
	},
	{
		icons: BookOpen,
		title: 'Divulgue pesquisas ',
		description: 'Publique seus artigos, apresente seus projetos, de pesquisa e encontre colaboradores para novas ideias'
	},
]

function Featuresection() {
	return (
		<section className='bg-background py-20'>
			<div className='container-main'>
				<div className='mx-auto text-center max-w-2xl'>
					<p className='text-primary uppercase tracking-wide font-semibold text-sm'>
						Por que participar?
					</p>

					<h2 className='text-4xl font-bold text-balance text-foreground tracking-tight mt-3'>
							Tudo que você precisa para crescer na vida academica
					</h2>

					<p className='mt-4 text-balance text-lg text-muted-foreground'>
						Networking e recursos para impulsionar sua jornada no IFCE
					</p>

				</div>

				<div className='grid grid-cols-4 gap-6 mt-16'>
						{features.map(feature => (
							<Card key={feature.title}	className='border-border bg-card houver:border-primary/30 houver:shadow-md transition-all duration-200'>
								<CardContent className='flex flex-col px-6'>
									<div className='flex items-center justify-center size-10 bg-primary/10 rounded-lg'>
										<feature.icons className='size-5 text-primary'/>
									</div>
									<h3 className='text-lg mt-4 font-semibold text-foreground'>
										{feature.title}
									</h3>
									<p className='text-foreground text-sm text-balance leading-relaxed mt-2'>
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
				</div>

			</div>
		</section>
	)
}

export default Featuresection
