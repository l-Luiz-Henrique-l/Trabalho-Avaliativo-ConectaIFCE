import Navbar from '@/components/shared/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
	return (
		<>
		<div className="flex flex-col min-h-svh">
				<Navbar />
				<main className="flex-1 flex flex-col">
				<Outlet />
				</main>
		</div>
    </>
	)
}

export default AppLayout
