import Navbar from '@/components/shared/navbar'
import { useAuth } from '@/features/auth/contexts/AuthContext'
import UserMenu from '@/users/components/user-menu'
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

					<Navbar.Search />

					<Navbar.Links>
						<Navbar.Link to='/feed' text='Feed'/>
						<Navbar.Link to='/groups' text='Grupos'/>

					</Navbar.Links>

					<Navbar.Actions>
						<UserMenu />
					</Navbar.Actions>
				</Navbar>
				<Outlet />
    </>
	)
}

export default AppLayout
