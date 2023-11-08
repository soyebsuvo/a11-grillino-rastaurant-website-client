import { BsCart4 } from 'react-icons/bs';
import picture from '../../assets/about-img-5-1.jpg'
export default function AboutUs() {
    return (
        <div className="px-5 md:px-20">
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Our Brave</h3>
                <h2 className="font-open-sans text-4xl font-bold">About Us</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className='md:w-1/2 p-8'>
                    <img className='rounded-tr-full rounded-br-full' src={picture} alt="Images" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className="text-4xl font-bold my-3">Brought to you by largest creatives.</h2>
                    <p className='text-sm text-gray-500 my-3'>Compellingly engage backend technology and 2.0 strategic theme areas. Distinctively simplify world-class portals through global human capital. Holisticly expedite multimedia based materials and end-to-end architectures. Continually expedite magnetic synergy without front-end benefits.</p>
                    <div className='flex items-center gap-4 my-4'>
                        <div>
                            <BsCart4 className='text-6xl text-orange-400'></BsCart4>
                        </div>
                        <div>
                            <p className="text-xl font-bold">Best foods in the city</p>
                            <p className="text-gray-500">Objectively transition virtual functionaities via enterprise-wide benefits.</p>
                        </div>
                    </div>
                    <div className='my-3'>
                        <p className="text-xl font-bold">Best foods in the city</p>
                        <p className="text-gray-500">Objectively transition virtual functionaities via enterprise-wide benefits.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
