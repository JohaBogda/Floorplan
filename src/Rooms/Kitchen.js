import React from "react"
import Oven from "../KitchenComp/Oven"
import Sink from "../KitchenComp/Sink"

const Kitchen = () => {
    return(
        <>
        <div className = "Oven"><Oven /></div>
        <div className = "Sink"><Sink /></div>
        <div>

            Kitchen
        </div>
        </>
    )
}

export default Kitchen