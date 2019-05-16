import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MenuBottom from './components/Menu/MenuBottom';
import ProductList from './components/ProductList/ProductList'
import './App.css';

const API_KEY =`${process.env.REACT_APP_API_KEY_AL}`

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
			user: "",
			currentPage: 0,
			itemsPerPage: 16,
			showArrowLeft: false,
			showArrowRight: true
		}
	}

	toggleArrows = (arrow) => {
		this.setState({ 
			showArrowLeft: !this.state.showArrowLeft,
			showArrowRight: !this.state.showArrowRight
		})
	}
		

	onClickArrow = (event) => {
		if(event.target.alt === "leftArrow" && this.state.currentPage > 0 ) {
			this.setState({ currentPage: this.state.currentPage - 1});
			this.toggleArrows();
		} else if (event.target.alt === "rightArrow" && this.state.currentPage < 1) {
			this.setState({ currentPage: this.state.currentPage + 1});
			this.toggleArrows();
		}	
	};

	

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
		console.log(this.state.products)
	}

	render() {
		const { user, products, itemsPerPage, currentPage, showArrowLeft, showArrowRight} = this.state;
		const filteredProducts = products.slice(
			currentPage * parseInt (itemsPerPage, 0), 
			(currentPage + 1) * parseInt(itemsPerPage, 0)
		);
		return (
		    <div className="App">
		      <Navigation user={user} />
		      <Header />
		      <Menu 
		      currentPage={currentPage} 
		      clickArrow={this.onClickArrow} 
		      products={products} 
		      filteredProducts={filteredProducts}
		      showArrowLeft={showArrowLeft}
		      showArrowRight={showArrowRight}
		      toggleArrows={this.toggleArrows} 
		      />
		      <ProductList products={filteredProducts} />
		      <MenuBottom 
		      currentPage={currentPage} 
		      clickArrow={this.onClickArrow} 
		      products={products} 
		      filteredProducts={filteredProducts}
		      showArrowLeft={showArrowLeft}
		      showArrowRight={showArrowRight} 
		      />
		    </div>
		);
	}
}
  

export default App;
