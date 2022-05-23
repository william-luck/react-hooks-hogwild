import react, { useState } from "react";

function Filter({ hogs, filterHogs }) {

    const [displayGreased, setDisplayGreased] = useState(false)
    const [sortByValue, setSortByValue] = useState('All')
    
    function handleGreased() {
        setDisplayGreased(!displayGreased)

        if (displayGreased === false) {
			const unfilteredHogs = [...hogs]
            filterHogs(unfilteredHogs)
		} else {
			const filteredHogs = hogs.filter(hog => {
				if (hog.greased === true) return true
			})
			filterHogs(filteredHogs)
		}
    }

    function handleSort(event) {
        if (event.target.value === "All") {
            // Uses the original hogs if all is selected
            const allSortedHogs = [...hogs]
            filterHogs(allSortedHogs)
        } else if (event.target.value === 'Name') {
            // sort hogs by name
            const nameSortedHogs = [...hogs]
            nameSortedHogs.sort((a,b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            })
            filterHogs(nameSortedHogs)
        } else if (event.target.value === 'Weight') {
            // sort hogs by weight
            const weightSortedHogs = [...hogs]
            weightSortedHogs.sort((a,b) => {
                if(a.weight < b.weight) return -1;
                if(a.weight > b.weight) return 1;
                return 0;
            })
            filterHogs(weightSortedHogs)
        }
    }
        



    return (
        <div>
            Sort by:
            <select onChange={handleSort}>
                <option value='All'>All</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
            <button onClick={handleGreased}>{displayGreased ? "Show only greased" : "Show all" }</button>        
        </div>
    )
}
    


export default Filter;