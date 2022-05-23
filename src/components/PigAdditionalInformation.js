
function PigAdditionalInformation({specialty, greased, weight, medal}) {


    
    

    return (
        <div>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased: {greased ? "Big greasy boi" : "No grease :("}</p>
            <p>Highest medal achieved: {medal}</p>
        </div>
    )
}

export default PigAdditionalInformation;