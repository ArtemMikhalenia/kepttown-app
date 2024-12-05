import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
	return (
		<div
			className="app-wrapper"
			style={{ cursor: "url(snowflake-cursor.svg),auto" }}
		>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
