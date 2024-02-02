import { Fragment } from "react";
import Navbar from "./Navbar";

function About() {
    return (
        <Fragment>
        <Navbar />
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <h1 className="text-center text-3xl">About us</h1>
                <p className="text-center text-xl py-20 w-3/4">TheTraveler is a dynamic and adventurous travel company specializing in offering sport-oriented vacation packages, such as cycling, trekking, and climbing, in diverse locations around the globe. 
                    Catering to thrill-seekers and outdoor enthusiasts, TheTraveler prides itself on creating immersive and challenging experiences that push the boundaries of conventional tourism. 
                    The company stands out with its unique initiative of encouraging customers to share their travel experiences on its platform. 
                    By contributing to TheTraveler's online community feed with stories and insights from their journeys, customers not only enrich the community but also earn a 5% discount on their next adventure with TheTraveler.
                    This innovative approach not only fosters a strong sense of community among its clients but also provides valuable real-world insights into its packages, enhancing the overall experience for future travelers.
                </p>
            </div>
        </Fragment>
    )
}

export default About;