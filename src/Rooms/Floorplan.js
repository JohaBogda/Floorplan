import React from "react"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const Floorplan = () => {
const Bedrooms = {
  bedNum1: "Bedroom 1",
  bedNum2: "Bedroom 2",
  bedNum3: "Bedroom 3"
}

const Baths = {
    fullBath: "Full Bath",
    halfBath: "Half Bath"
}

    return(
        <div className = "Floorplan">
            <span className = "Kitchen"><Kitchen /></span>
            <span className = "LivingRoom"><LivingRoom /></span>
            <span className = "Bedroom1"><Bedroom Bedrooms = {Bedrooms.bedNum1} /></span>
            <span className = "Bedroom2"><Bedroom Bedrooms = {Bedrooms.bedNum2}/></span>
            <span className = "Bedroom3"><Bedroom Bedrooms = {Bedrooms.bedNum3}/></span>
            <span className = "FullBath"><Bath Baths = {Baths.fullBath}/></span>
            <span className = "HalfBath"><Bath Baths = {Baths.halfBath}/></span>
        </div>
    )
}

export default Floorplan