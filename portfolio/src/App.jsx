import { Outlet } from 'react-router-dom'
import NavTabs from './components/NavTabs'
import Footer from './components/Footer'

function App () {
    return (
        <>
            <NavTabs/>
            <div className="px-5">
            <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default App




