import React from 'react';
import leftArrow from './arrow-left.svg';
import rightArrow from './arrow-right.svg';

const Arrows = ( { clickArrow, showArrowLeft, showArrowRight } ) => {
	return (
		<div id='navArrows' className="jsEnd">
			{showArrowLeft && <img
			key={leftArrow} 
			style={{height: 'auto', width: '2rem'}} 
			src={leftArrow} 
			alt="leftArrow" 
			className="ph1 pointer"
			onClick={clickArrow}
			/>}				
			{showArrowRight && <img
			key={rightArrow}  
			style={{height: 'auto', width: '2rem'}} 
			src={rightArrow} 
			alt="rightArrow" 
			className="ph1 pointer"
			onClick={clickArrow}
			/>}				
		</div>
	)
}

export default Arrows;