import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./routes";

import "./Main.scss";

function Main() {
	const [IsLoading, setIsLoading] = useState(false);
	const [ErrText, setErrText] = useState(null);

	return (
		<div className='main-container'>
			<Header />
			<Routes
				IsLoading={IsLoading}
				setIsLoading={setIsLoading}
				ErrText={ErrText}
				setErrText={setErrText}
			/>
			<Footer />
		</div>
	);
}

export default Main;
