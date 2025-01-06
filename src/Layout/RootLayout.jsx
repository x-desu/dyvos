import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../components/Footer"


export const RootLayout = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
