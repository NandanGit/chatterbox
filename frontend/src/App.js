import React, { useState } from 'react';
import Auth from './Components/Auth/Auth';
import variables from './env';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return <React.Fragment>{!isLoggedIn && <Auth />}</React.Fragment>;
}

export default App;
