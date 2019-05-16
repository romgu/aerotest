import React from 'react';
import Product from './Product'

const ProductList = ( { products } ) => {
	const productComponent = products.map((item, i) => {
		return <Product 
		key={i} 
		id={products[i].id} 
		category={products[i].category}
		cost={products[i].cost} 
		name={products[i].name} 
		imageUrl={products[i].img.url}
		/>
	})
	return (
		<div id="productContainer">
			{productComponent}
		</div>
	)
}
export default ProductList;