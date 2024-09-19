import News from './pages/News'
import Teams from './pages/Teams'
import Home from './pages/Home'
import Members from './pages/Members'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/teams" element={<Teams />} />
			<Route path="/news" element={<News />} />
			<Route path="/home" element={<Home />} />
			<Route path="/members" element={<Members />} />
		</Routes>
	</BrowserRouter>
);

export default App;
