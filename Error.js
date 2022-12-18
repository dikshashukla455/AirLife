import React from 'react'
import AirPollutionImg2 from "./images/383314-PCITS7-243.jpg";
import "./Tracker.css";
function Error() {
  return (
    <>
    <div
        style={{
            backgroundImage: `url(${AirPollutionImg2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    >
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="text-orange-100" style={{fontSize:"10rem"}}>
404
    </div>
    <div className="text-orange-100" style={{fontSize:"3rem"}}>
Oops! Page not found :( 
    </div>
    </div>
    </div>
    </>
  )
}

export default Error