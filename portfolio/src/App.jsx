import { Outlet } from 'react-router-dom'

import NavTabs from './components/NavTabs'
import Footer from './components/Footer'
// import PortfolioContainer from "./components/PortfolioContainer";
// import './App.css';

function App () {
    return (
        <div className="px-5">
            <NavTabs/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default App




