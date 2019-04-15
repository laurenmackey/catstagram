// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of App
	// import Header and Homepage
	// include them inside of App
	// export the App component!

// Exercise 6: Routing
// Allow your user to route to different pages!
	// need to import BrowserRouter and Router from react-router-dom
	// Create basic class components on AboutPage and Profile Page, export them
	// import them in this file
	// set up BrowserRouter
	// set up Route to with paths to each page (hint: HomePage should "/") and with the appropriate component

import React from 'react';
import Header from './components/Header.jsx';
import Homepage from './pages/HomePage.jsx';
import AboutPage from "./pages/AboutPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
		    <BrowserRouter>
		        <div className="App">
		            <Header />
		            <Route exact path="/" component={ Homepage } />
		            <Route path="/about" component={ AboutPage } />
		            <Route path="/profile" component={ ProfilePage } />
		        </div>
		    </BrowserRouter>
		);
	}
}

export default App;