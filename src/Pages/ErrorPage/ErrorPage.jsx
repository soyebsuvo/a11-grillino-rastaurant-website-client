import { Link } from 'react-router-dom'
import error from '../../assets/error.jpeg'
import LoginButton from '../../components/Navbar/LoginButton'
export default function ErrorPage() {
    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <div>
                <div className='flex justify-center'>
                    <img src={error} alt="Error" />
                </div>
                <div className='flex justify-center mt-8'>
                    <Link to='/'><LoginButton variant='contained'>Go Home</LoginButton></Link>
                </div>
            </div>
        </div>
    )
}
