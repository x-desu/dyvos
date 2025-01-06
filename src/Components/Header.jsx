import { Link, NavLink } from "react-router-dom"
import {Menu,X} from 'lucide-react'
import { useState } from "react"
import logo from '/logo.jpeg'
const Header = () => {

    const [isOpen,setIsOpen] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(prev=>!prev)
    }

    return (
    <header className="  bg-[#012A45] text-white sticky top-0 z-[16]">
        <section className="max-w-full sm:max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg xl:max-w-screen-xl  mx-auto flex items-center justify-between  px-8 p-4 flex-wrap">
        <Link to="/">
        <img src={logo} className="w-16 object-cover brightness-150 contrast-125"
        alt="logo"
        />
        </Link>
        <div className="hidden  md:flex justify-between text-[#F4F9FC]">
        <NavLink to='/about'>About</NavLink>
        {/* <NavLink to="Services">Services</NavLink>
        <NavLink to="Projects">Projects</NavLink> */}
        </div>
        <div className="md:hidden">
            <button onClick={toggleNavbar}>
            {isOpen ? <X/>:<Menu/>}
            </button>
        </div>
        {isOpen && <div className="absolute top-16 left-0 flex flex-col w-full items-center gap-2 bg-primary p-4 shadow-md transition-all">
            <NavLink to='/about' className="hover:scale-105" onClick={toggleNavbar}>About</NavLink>
            {/* <NavLink to="Services" className="hover:scale-105">Services</NavLink>
            <NavLink to="Projects" className="hover:scale-105">Projects</NavLink> */}
            </div>}
        </section>
    </header>
  )
}

export default Header