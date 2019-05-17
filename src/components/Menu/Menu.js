import React from 'react';
import Arrows from './Arrows/Arrows';
import verticalRuler from './vr.png'

const Menu = ( { sortActive, currentPage, products, filteredProducts, showArrowLeft, showArrowRight, clickArrow, sortByLowPrice, sortByHighPrice, sortByRecent } ) => {
	return (
		<div>
			<nav className="ph6 pt4 pb2 menu-grid">
				<span className="pr4">{(filteredProducts.length)*(currentPage+1)} of {products.length} products</span>
				<img src={verticalRuler} alt="verticalRuler" className="ph1"/>
				<span className="pr2 jsEnd">Sort by:</span>
				<span onClick={sortByRecent} className={sortActive === "recent" ? 'ph3 pv2 button button-active mh2 jsStart' : "ph3 pv2 button mh2 jsStar"}>Most recent</span>
				<span onClick={sortByLowPrice} className={sortActive === "lowPrice" ? 'ph3 pv2 button button-active mh2 jsStart' : "ph3 pv2 button mh2 jsStar "}>Lowest Price</span>
				<span onClick={sortByHighPrice} className={sortActive === "highPrice" ? 'ph3 pv2 button button-active mh2 jsStart' : "ph3 pv2 button mh2 jsStar "}>Highest Price</span>
				<Arrows clickArrow={clickArrow} showArrowLeft={showArrowLeft} showArrowRight={showArrowRight} />
			</nav>
			<hr className='hr' />
		</div>
	)
}

export default Menu;