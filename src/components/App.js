import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import PigsContainer from "./PigsContainer";

import hogs from "../porkers_data";

function App() {

	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)

	function filterHogs(filteredHogs) {
		setHogsToDisplay(filteredHogs)
	}


	return (
		<div className="App">
			<Nav />
			<Filter hogs={hogs} filterHogs={filterHogs} />
			<hr></hr>
			<PigsContainer hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
