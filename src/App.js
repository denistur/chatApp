import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import FooterComponent from "./components/Footer";

import Container from "react-bootstrap/Container";
import ChatIndex from "./features/chat/ChatIndex";

function App() {
	return (
		<div className="App app-wrapper">
			<Container fluid="lg" style={{backgroundColor: "whitesmoke"}}>
				<Header/>

				<ChatIndex/>
				<FooterComponent/>
			</Container>
		</div>
	);
}

export default App;
