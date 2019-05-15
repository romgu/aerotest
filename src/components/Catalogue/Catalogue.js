import React from 'react';
import Product from './Product'

const Catalogue = ( { products } ) => {
	const productComponent = products.map((item, i) => {
		return <Product 
		key={i} 
		id={products[i].id} 
		category={products[i].category} 
		name={products[i].name} 
		imageUrl={products[i].img.url}
		/>
	})
	return (
		<div>
			{productComponent}
		</div>
	)
}
export default Catalogue;