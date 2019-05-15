import React from 'react'; 

const Product = (props) => {
	return (
		<div key={props.id} className="bg-white dib pa3 ma3 bw1 shadow-5 w-20">
			<img src={`${props.imageUrl}`} alt="productImage"/>
			<hr className='hr' style={{marginTop: '-2px'}} />
			<h4 className='silver fw4 tl'>{props.category}</h4>
			<h4 className='gray fw5 tl'>{props.name}</h4>
		</div>
	)
}

export default Product;