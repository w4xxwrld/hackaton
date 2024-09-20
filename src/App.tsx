import News from './pages/News'
import Teams from './pages/Teams'
import Home from './pages/Home'
import Members from './pages/Members'
import MemberProfile from './pages/MemberProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamProfile from './pages/TeamProfile';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/teams" element={<Teams />} />
			<Route path="/news" element={<News />} />
			<Route path="/home" element={<Home />} />
			<Route path="/members" element={<Members />} />
			<Route path="/member/:memberId" element={<MemberProfile />} />
			<Route path="/team/:teamId" element={<TeamProfile />} />
		</Routes>
	</BrowserRouter>
);

export default App;
