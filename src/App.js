import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MenuBottom from './components/Menu/MenuBottom';
import Catalogue from './components/Catalogue/Catalogue'
import './App.css';

const API_KEY =`${process.env.REACT_APP_API_KEY_AL}`

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
			user: ""
		}
	}
	
	componentWillMount() {
		fetch("https://coding-challenge-api.aerolab.co/products", {
  			method: 'GET',
  			headers: {  
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    'Authorization': `Bearer ${API_KEY}`
  			}
		})   
		.then(response => response.json())
		.then((response) => {
			this.setState({ products: response})
		}).catch(error => console.log("Something went wrong"));

		fetch("https://coding-challenge-api.aerolab.co/user/me", {
  			method: 'GET',
  			headers: {  
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    'Authorization': `Bearer ${API_KEY}`
  			}
		})   
		.then(response => response.json())
		.then((response) => {
			this.setState({ user: response})
		}).catch(error => console.log("Something went wrong"));
		}


	componentDidUpdate() {
		console.log(this.state.user)
	}

	render() {
		return (
		    <div className="App">
		      <Navigation user={this.state.user} />
		      <Header />
		      <Menu />
		      <Catalogue products={this.state.products} />
		      <MenuBottom />
		    </div>
		);
	}
}
  

export default App;
