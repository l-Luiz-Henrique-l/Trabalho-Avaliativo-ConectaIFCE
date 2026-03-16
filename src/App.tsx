import Navbar from "./components/shared/navbar"
import Footer from "./components/shared/footer"
import { Outlet } from "react-router-dom"
function App() {

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

export default App
