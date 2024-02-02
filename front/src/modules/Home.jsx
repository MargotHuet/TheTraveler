import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

function Home() {
    return (
        <>
        <Navbar />
        <Fragment>
            <div className="bg-gradient-to-b from-sky-300 to-white w-screen h-screen flex items-center justify-center">
                <div className="w-1/2" id="title-container">
                    <h1 className="text-center mt-5 font-bold text-7xl overflow-hidden">It's a Big World Out There, Go Explore.</h1>
                    <p className="text-center mt-5 text-slate-400">Discover a new way to enjoy your holidays, in a healthy way.</p>
                    <div className="flex items-center justify-center mt-5" id="button-position">
                        <Link to="/trips" className="border rounded rounded-full shadow-lg py-4 px-6 bg-sky-500 text-white text-xl hover:bg-sky-700">Discover</Link>
                    </div>
                </div>
            </div>
            <div className="w-screen h-20">
                <h2 className="text-center font-bold">Discover the world in a fit way </h2>
            </div>
            <div className="w-full h-40 bg-green-100">
                <h1 className="text-center mt-5">Share your unforgetable sports vacations with our community and save up to 5% discount on your next trip*</h1>
                <div className="flex items-center justify-center mt-5" id="button-position">
                    <Link to="/feed" className="border rounded rounded-full shadow-lg py-4 px-6 bg-sky-500 text-white text-xl hover:bg-sky-700">Share your trip</Link>
                </div>
            </div>
        </Fragment>
        </>
    )
}

export default Home;
