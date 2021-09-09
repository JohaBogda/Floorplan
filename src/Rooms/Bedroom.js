import React from "react"

const Bedroom = (props) => {
    console.log(props.Bedrooms)
    return(
        <div>
            {props.Bedrooms}
        </div>
    )
}

export default Bedroom