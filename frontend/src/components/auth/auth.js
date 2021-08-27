import React, { useState } from 'react';

import Signup from './Signup/Signup';
import './Auth.css';
import Login from './Login/Login';

function Auth(props) {
	const [authType, setAuthType] = useState('login');
	return (
		<div className="auth-wrapper center-elems">
			<h1 className="app-title">ChatterBox</h1>
			<div className="auth-container center-elems">
				{authType === 'login' ? (
					<Login setAuthType={setAuthType} />
				) : (
					<Signup setAuthType={setAuthType} />
				)}
			</div>
		</div>
	);
}

export default Auth;
