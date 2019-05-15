import React from 'react';
import leftArrow from './arrow-left.svg';
import rightArrow from './arrow-right.svg';

const MenuBottom = () => {
	return (
		<div>
			<nav className="ph6 pt4 pb2 flex items-center justify-between">
				<span className="pr4">16 of 32 products</span>
				<div id='navArrows' className="">
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

export default MenuBottom;