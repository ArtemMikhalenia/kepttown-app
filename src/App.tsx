import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

import "./App.css";

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<AnimatedRoutes />
			</main>
			<Footer />
		</Router>
	);
};

export default App;
