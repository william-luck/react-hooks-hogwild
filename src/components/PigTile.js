import react, { useState } from "react";
import PigAdditionalInformation from "./PigAdditionalInformation";

function PigTile({ image, name, specialty, greased, weight, medal }) {


   

    const [pigDetailsVisibility, setPigDetailsVisbility] = useState(false)

    function handleClick() {
        setPigDetailsVisbility(!pigDetailsVisibility)
    }




    return (
        <div className="ui eight wide column" onClick={handleClick}>
            <img src={image} alt={name} height="200px" width="200px" />
            <p>{name}</p>
            {/* The below div will show / hide depending on whether the tile is clicked */}
            {pigDetailsVisibility ? <PigAdditionalInformation 
            specialty={specialty}
            greased={greased}
            weight={weight}
            medal={medal} /> : ""}
        </div>
    )
}

export default PigTile;