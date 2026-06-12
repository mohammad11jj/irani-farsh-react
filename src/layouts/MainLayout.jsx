import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

function MainLayout() {
  return (
    <>
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
    </>
  )
}

export default MainLayout
