import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
