import React from 'react';
import logo from './aerolab-logo.svg';
import coin from './coin.svg';

const Navigation = ({ user }) => {
	return (
		<nav className=" flex items-center justify-between ph4 pv1">
			<img style={{height: 'auto', width: '1.5rem'}} src={logo} alt="Logo" />
			<div id='userInfo'>
				<p className="di ph3">{user.name}</p>
				<div className="inline-flex items-center button">
					<span className="ph1">{user.points}</span>
					<img src={coin} alt="Coin" style={{height: 'auto', width: '35%'}}/>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;