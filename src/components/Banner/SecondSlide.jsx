import { Link } from 'react-router-dom';
import pic from '../../assets/hero-img-4-2.png';
import ExploreButton from './ExploreButton';
export default function SecondSlide() {
  return (
    <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${pic})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="mb-5 text-4xl font-bold font-edu-beginner">Welcome to</h2>
                        <h2 className="mb-5 text-7xl font-bold font-open-sans">Food World</h2>
                        <p className="mb-5 text-sm">------HOME OF THE BEST HAND MADE DELICIOUS FOOD------</p>
                        <Link to='/allfooditems'><ExploreButton variant="contained">Explore Food</ExploreButton></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
