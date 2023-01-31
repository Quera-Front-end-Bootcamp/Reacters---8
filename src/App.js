import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
function App() {
	return (
		<div className="App">
			<Homepage />
			<div className="flex justify-center">
				<p className="text-red-300 font-bold">Hellloooooo</p>
			</div>
			<Routes></Routes>
		</div>
	);
}

export default App;
