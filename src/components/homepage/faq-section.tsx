import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const faq = [
	{
		question: 'Quem pode participar do ConectaIFCE',
		answer: 'Todos os membros da comunidade IFCE: alunos, professores, técnicos admnistrativos e egressos.'
	},
	{
		question: 'Como funciona a formação de grupos de estudos?',
		answer: 'Você pode criar um grupo de estudo sobre qualquer tema, convidar membros e compartilhar materiais.'
	},
	{
		question: 'Posso divulgar meu projeto de pesquisa?',
		answer: 'Sim! A plataforma possui área dedicada para publicação de projetos e pesquisas, extensão e inovação.'
	},
	{
		question: 'A plataforma está disponível em dispositivos móveis?',
		answer: 'Sim! O ConectaIFCE é totalmente responsivo e funciona perfeitamente em smartphones, tablets e desktops.'
	},
	{
		question: 'Como funciona as badges e conquistas?',
		answer: 'As badges são reconhecimentos visuais do seu papel e conquistas na instituição'
	}
]

function FaqSection() {
	return (
		<section className='bg-card py-20' id='faq-section'>
			<div className='container-main max-w-3xl'>
					<div className='mx-auto text-center'>
						<p className='text-primary uppercase text-sm font-semibold tracking-wide'>FAQ</p>
						<h2 className='text-4xl font-bold text-balance text-foreground tracking-tight mt-3'>
							Perguntas Frequentes</h2>
					</div>

					<Accordion type="single" collapsible className="w-full mt-16">
						{ faq.map(item => (
							<AccordionItem key={item.question} value='item.question'>
								<AccordionTrigger className='text-base font-medium text-foreground houver:text-primary'>
									{item.question}
								</AccordionTrigger>
								<AccordionContent className='text-sm leading-relaxed text-muted-foreground'>
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						)) }
					</Accordion>
			</div>
		</section>
	)
}

export default FaqSection
