import { NavLink } from "react-router-dom"
import logo from '../../assets/light-Grili.svg'
import './navbar.css'
import { BiTime } from 'react-icons/bi';
import LoginButton from "./LoginButton"
export default function Navbar() {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allfooditems'>All Food Items</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li className="md:hidden"><NavLink to='/login'>
            <LoginButton variant="contained">Login</LoginButton>
            </NavLink></li>
    </>
    return (
        <nav className="shadow-lg bg-white py-4">
            <div className="md:flex items-center justify-between bg-base-100 px-2 md:px-12">
                <div className="flex justify-between items-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="cursor-pointer hover:decoration-neutral normal-case text-xl">
                        <img className="w-36" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        {links}
                    </ul>
                </div>
                <div className="hidden md:flex gap-12">
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <BiTime className="text-4xl text-orange-400"></BiTime>
                        </div>
                        <div>
                            <p className="text-sm font-bold">Call for Order</p>
                            <p className="text-md font-semibold">+88 &nbsp;017****445</p>
                        </div>
                    </div>
                    <LoginButton variant="contained">Login</LoginButton>
                </div>
            </div>
        </nav>
    )
}
