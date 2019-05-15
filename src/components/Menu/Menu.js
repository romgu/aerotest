import React from 'react';
import leftArrow from './arrow-left.svg';
import rightArrow from './arrow-right.svg';
import verticalRuler from './vr.png'

const Menu = () => {
	return (
		<div>
			<nav className="ph6 pt4 pb2 menu-grid">
				<span className="pr4">16 of 32 products</span>
				<img src={verticalRuler} alt="verticalRuler" className="ph1"/>
				<span className="pr2 jsEnd">Sort by:</span>
				<span className="ph3 pv2 button mh2 jsStart">Most recent</span>
				<span className="ph3 pv2 button mh2 jsStart">Lowest Price</span>
				<span className="ph3 pv2 button mh2 jsStart">Highest Price</span>
				<div id='navArrows' className="jsEnd">
					<img 
					style={{height: 'auto', width: '2rem'}} 
					src={leftArrow} 
					alt="leftArrow" 
					className="ph1 pointer"/>				
					<img 
					style={{height: 'auto', width: '2rem'}} 
					src={rightArrow} 
					alt="rightArrow" 
					className="ph1 pointer" />				
				</div>
			</nav>
			<hr className='hr' />
		</div>
	)
}

export default Menu;