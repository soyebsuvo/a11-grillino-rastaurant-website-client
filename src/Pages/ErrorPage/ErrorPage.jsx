import { Link } from 'react-router-dom'
import error from '../../assets/error.jpeg'
import LoginButton from '../../components/Navbar/LoginButton'
import { Helmet } from 'react-helmet-async'
export default function ErrorPage() {
    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <Helmet>
                <title>Grillino | Error Occuared</title>
                <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
            </Helmet>
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
