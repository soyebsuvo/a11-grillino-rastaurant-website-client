import pic from '../../assets/hero-img-4-1.png'
import ExploreButton from './ExploreButton'
export default function FirstSlide() {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${pic})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="mb-5 text-4xl font-bold font-edu-beginner">Welcome to</h2>
                        <h2 className="mb-5 text-7xl font-bold font-open-sans">Grillino</h2>
                        <p className="mb-5 text-sm">------HOME OF THE BEST HAND MADE DELICIOUS FOOD------</p>
                        <ExploreButton variant="contained">Explore Food</ExploreButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
