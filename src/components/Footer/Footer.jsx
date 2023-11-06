import { Link } from 'react-router-dom'
import logo from '../../assets/light-Grili.svg'
export default function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img className='w-36' src={logo} alt="logo" />
                    <p>GRILLINO Industries Ltd.<br />Providing reasonable foods since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to='/'><a className="link link-hover">Home</a></Link>
                    <Link to='/allfooditems'><a className="link link-hover">All Food Items</a></Link>
                    <Link to='/blogs'><a className="link link-hover">Blogs</a></Link>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright &copy; 2023 - All right reserved by GRILLINO Industries Ltd</p>
                </aside>
            </footer>
        </>
    )
}
