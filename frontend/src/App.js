import React, { useState } from 'react';
import Auth from './Components/Auth/auth';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return <React.Fragment>{!isLoggedIn && <Auth />}</React.Fragment>;
}

export default App;
