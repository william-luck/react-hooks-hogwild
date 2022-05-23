import react, { useState } from "react";
import PigTile from "./PigTile";

function PigsContainer({ hogs }) {


    return (
        <div className="ui grid container">
            {hogs.map(hog => <PigTile 
            key={hog.name}
            image={hog.image} 
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog["highest medal achieved"]}
            />)}
        </div>
    )
}

export default PigsContainer;