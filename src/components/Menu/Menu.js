import React from 'react';
import Arrows from './Arrows/Arrows';
import verticalRuler from './vr.png'

const Menu = ( { currentPage, products, filteredProducts, showArrowLeft, showArrowRight, clickArrow } ) => {
	return (
		<div>
			<nav className="ph6 pt4 pb2 menu-grid">
				<span className="pr4">{(filteredProducts.length)*(currentPage+1)} of {products.length} products</span>
				<img src={verticalRuler} alt="verticalRuler" className="ph1"/>
				<span className="pr2 jsEnd">Sort by:</span>
				<span className="ph3 pv2 button mh2 jsStart">Most recent</span>
				<span className="ph3 pv2 button mh2 jsStart">Lowest Price</span>
				<span className="ph3 pv2 button mh2 jsStart">Highest Price</span>
				<Arrows clickArrow={clickArrow} showArrowLeft={showArrowLeft} showArrowRight={showArrowRight} />
			</nav>
			<hr className='hr' />
		</div>
	)
}

export default Menu;