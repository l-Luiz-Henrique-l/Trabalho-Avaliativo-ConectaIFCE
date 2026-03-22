import Navbar from '@/components/shared/navbar'
import UserMenu from '@/components/ui/user-menu'
import { useAuth } from '@/features/auth/contexts/AuthContext'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AppLayout() {

		const { isAuthenticad } = useAuth()

		if(!isAuthenticad){
			return <Navigate to='/login' replace/>
		}

	return (
		<>
		<Navbar>
					<Navbar.Brand to='/feed'/>

					<Navbar.Links>
						<Navbar.Link to='/feed' text='Feed'/>
						<Navbar.Link to='/groups' text='Grupos'/>
					</Navbar.Links>

					<Navbar.Actions>
						<UserMenu />
					</Navbar.Actions>
				</Navbar>
    </>
	)
}

export default AppLayout
