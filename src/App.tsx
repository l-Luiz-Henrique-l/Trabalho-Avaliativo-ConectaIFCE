import Navbar from "./components/shared/navbar"
import Footer from "./components/shared/footer"
import Homepage from "./pages/homepage"
function App() {

  return (
    <>
		<div className="flex flex-col min-h-svh">
				<Navbar />
				<main className="flex-1">
					<Homepage />
				</main>

				<Footer />
		</div>
    </>
  )
}

export default App
