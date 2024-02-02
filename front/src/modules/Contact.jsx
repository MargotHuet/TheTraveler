import { Fragment } from "react";
import Navbar from "./Navbar";

function Contact() {
    return (
        <Fragment>
        <Navbar />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-center text-3xl py-12">Contact us</h1>
                <p className="text-center text-xl py-20 w-3/4">Got questions? 
                    We're here to help! At TheTraveler, we understand that every adventure is unique and you might have queries or special requests.
                    Whether it's about choosing the perfect destination, understanding the intricacies of our sport-oriented vacation packages, or simply wanting to know more about TheTraveler experience, 
                    our dedicated team is just a message away. Don't hesitate to reach out to us for any assistance or information you need to make your next adventure with TheTraveler unforgettable.
                    Contact us today and let's make your travel dreams a reality!
                </p>

	            <div className="relative h-1/2 w-screen py-3 sm:max-w-xl sm:mx-auto">
		            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		            </div>
		            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			            <div className=" max-w-md mx-auto">
				            <div>
					            <h1 className="text-2xl font-semibold">Contact</h1>
				            </div>
				        <div className="divide-y divide-gray-200">
					        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
							        <input autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Your name" />
							        <label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your name</label>
						        </div>
                                <div className="relative">
							        <input autocomplete="off" id="lastname" name="lastname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Your lastname" />
							        <label for="lastname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your lastname</label>
						        </div>
						        <div className="relative">
							        <input autocomplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							        <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						        </div>
						        <div className="relative">
							        <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						        </div>
						        <div className="relative">
							        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						        </div>
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>

        </div>
        </Fragment>
    )
}

export default Contact;