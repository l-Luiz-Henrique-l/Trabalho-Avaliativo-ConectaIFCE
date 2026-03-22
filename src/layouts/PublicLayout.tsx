import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/features/auth/contexts/AuthContext'
import useScroll from '@/hooks/useScroll'
import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

function PublicLayout() {

		const { isAuthenticad } = useAuth()

		if(isAuthenticad){
			return <Navigate to='/feed' replace/>
		}

useScroll()

	return (
		    <>
		<div className="flex flex-col min-h-svh">
				<Navbar>
					<Navbar.Brand to='/'/>

					<Navbar.Links>
						<Navbar.Link to='/' text='Ínicio'/>
						<Navbar.Link to='#feature-section' text='Recursos'/>
						<Navbar.Link to='#faq-section' text='Perguntas Frequentes'/>
					</Navbar.Links>

					<Navbar.Actions>
						<Button variant='ghost' size='lg' asChild>
						<Link to="/login">Login</Link>
					</Button>
					<Button size='lg' asChild>
						<Link to="/register">Criar Conta</Link>
					</Button>
					</Navbar.Actions>
				</Navbar>
				<main className="flex-1 flex flex-col">
				<Outlet />
				</main>

				<Footer />
		</div>
    </>
	)
}

export default PublicLayout
