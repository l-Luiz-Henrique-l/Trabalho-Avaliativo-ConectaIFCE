import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import useScroll from '@/hooks/useScroll'
import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout() {

useScroll()

	return (
		    <>
		<div className="flex flex-col min-h-svh">
				<Navbar />
				<main className="flex-1 flex flex-col">
				<Outlet />
				</main>

				<Footer />
		</div>
    </>
	)
}

export default PublicLayout
