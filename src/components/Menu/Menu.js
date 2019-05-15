import React from 'react';
import leftArrow from './arrow-left.svg';
import rightArrow from './arrow-right.svg'

const Navigation = () => {
	return (
		<div>
			<nav className=" flex items-center justify-between ph6 pt4 pb2">
				<div>
					<span className="pr4">16 of 32 products</span>
					<span className="pr2">Sort by:</span>
					<span className="ph3 pv2 button mh2">Most recent</span>
					<span className="ph3 pv2 button mh2">Lowest Price</span>
					<span className="ph3 pv2 button mh2">Highest Price</span>
				</div>
				<div id='navArrows'>
					<img style={{height: 'auto', width: '2rem'}} src={leftArrow} alt="leftArrow" className="ph1"/>				
					<img style={{height: 'auto', width: '2rem'}} src={rightArrow} alt="rightArrow" className="ph1" />				
				</div>
			</nav>
			<hr style={{width: '82%', border:'none', height:'1px', color:'rgb(223,223,223)', backgroundColor:'rgb(223,223,223'}} />
		</div>
	)
}

export default Navigation;