import React from 'react'; 

const Product = ({id, imageUrl, category, name}) => {
	return (
		<div key={id} className="bg-white dib pa3 ma3 bw1 shadow-5 w-20">
			<img src={`${imageUrl}`} alt="productImage"/>
			<hr className='hr' style={{marginTop: '-2px'}} />
			<h4 className='silver fw4 tl'>{category}</h4>
			<h4 className='gray fw5 tl'>{name}</h4>
		</div>
	)
}

export default Product;