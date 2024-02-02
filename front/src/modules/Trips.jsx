import { Fragment } from "react";
import Navbar from "./Navbar";

function Trips() {
    return (
        <Fragment>
            <Navbar/>
            <div className="w-screen h-20">
                <h2 className="text-center font-bold">Go discover new places</h2>
            </div>
        </Fragment>
    )
}

export default Trips;