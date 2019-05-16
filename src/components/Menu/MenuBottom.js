import React from 'react';
import Arrows from './Arrows/Arrows';


const MenuBottom = ( { clickArrow, currentPage, products, filteredProducts, showArrowLeft, showArrowRight } ) => {
	return (
		<div>
			<nav className="ph6 pt4 pb2 flex items-center justify-between">
				<span className="pr4">{(filteredProducts.length)*(currentPage+1)} of {products.length} products</span>
				<Arrows />
			</nav>
			<hr className='hr' />
		</div>
	)
}

export default MenuBottom;