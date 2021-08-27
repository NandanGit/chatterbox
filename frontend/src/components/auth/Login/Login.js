import React from 'react';
import Input from '../../Form/Input/Input';
import Button from '../../UI/Button';

import './Login.css';

function Login({ setAuthType }) {
	return (
		<div className="login-container">
			<h1>Login</h1>
			<Input placeholder="Username" icon="ci:id-card" status={'valid'} />
			<Input
				placeholder="Password"
				icon="akar-icons:person"
				status={'invalid'}
			/>
			<div className="actions">
				<Button>Login</Button>
				<Button
					onClick={setAuthType.bind(this, 'signup')}
					className="outline"
				>
					Signup
				</Button>
			</div>
		</div>
	);
}

export default Login;
