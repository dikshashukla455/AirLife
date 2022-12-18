import React from "react";
import { Route } from "react-router-dom";
import Tracker from "./components/Tracker";
import MostPolluted from "./components/MostPolluted";
import LeastPolluted from "./components/LeastPolluted";
import Error from "./components/Error"

function App() {
	return (
		<>
			<Route path="/" component={Tracker} exact/>
			<Route path="/least" component={LeastPolluted} />
			<Route path="/most" component={MostPolluted} />
			<Route path="/invalid" component={Error} />
				
		</>
	);
}

export default App;
