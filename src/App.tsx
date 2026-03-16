import Navbar from "./components/shared/navbar"
import Footer from "./components/shared/footer"
import Homepage from "./pages/homepage"
import Loginpage from "./pages/loginpage"
import Registerpage from "./pages/registerpage"
function App() {

  return (
    <>
		<div className="flex flex-col min-h-svh">
				<Navbar />
				<main className="flex-1 flex flex-col">
					{ /* <Homepage /> */ }
					{/* <Loginpage /> */}
					<Registerpage />
				</main>

				<Footer />
		</div>
    </>
  )
}

export default App
