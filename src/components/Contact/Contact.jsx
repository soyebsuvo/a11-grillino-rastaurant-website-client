import { MdLocationOn } from 'react-icons/md';
export default function Contact() {
    return (
        <div className="py-8 px-3 md:px-20">
            <div className="text-center py-8">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Contact Us</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="bg-gray-100 p-12 md:w-1/2">
                    <h2 className="text-2xl font-open-sans font-bold">Send Us A Message</h2>
                    <p className="text-sm text-orange-500">Your email address will not be published*</p>
                    <form onSubmit={e => e.preventDefault()}>
                        <input className="px-4 py-4 my-2 w-full" type="text" name="name" id="name" placeholder="Enter Your Name" />
                        <br />
                        <input className="px-4 py-4 my-2 w-full" type="email" name="email" id="email" placeholder="Enter Your Email" />
                        <br />
                        <textarea className="px-4 py-4 my-2 w-full" placeholder="Enter Massage" name="message" id="message" cols="30" rows="5"></textarea>
                        <br />
                        <button className="btn rounded-none px-8 py-3 text-white bg-orange-400 my-2" >Send Message</button>
                    </form>
                </div>

                <div className="md:w-1/2 p-8">
                    <h2 className="text-4xl font-open-sans font-bold mb-6">We are here for help you! Arrange a meeting.</h2>
                    <p className="text-sm mb-6">Holisticly engage inexpensive architectures via high-quality solutions. Efficiently implement synergistic applications vis-a-vis best-of-breed e-commerce onotonectally enable client-based portals</p>
                    <h3 className="text-2xl font-open-sans font-bold">Opening Hours</h3>
                    <div className="flex justify-between py-3">
                        <p className="text-gray-500">Saturday</p>
                        <p className="text-gray-500">11AM - 6PM</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-3">
                        <p className="text-gray-500">Monday</p>
                        <p className="text-gray-500">9AM - 3PM</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-3">
                        <p className="text-gray-500">Wednesday</p>
                        <p className="text-gray-500">10AM - 6PM</p>
                    </div>
                    <hr />
                    <div>
                        <h2 className="text-3xl my-3">Office Address</h2>
                        <p className="text-gray-500 flex items-center gap-2 my-2"> <MdLocationOn className='text-2xl text-orange-400'></MdLocationOn> 374 William S Canning Blvd, Fall River MA 2721</p>
                        <p className="text-gray-500 flex items-center gap-2 my-2"> <MdLocationOn className='text-2xl text-orange-400'></MdLocationOn> 776 David Tower SDD, New York, London</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
