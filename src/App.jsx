import Router from "./router"
import Sidebar from "./components/Sidebar"
import { useLocation } from 'react-router-dom';
function App() {

  const location = useLocation();
  const routesToHideSidebar = ['/register', '/login'];
  const shouldHideSidebar = routesToHideSidebar.includes(location.pathname);

  return (
    <>
      {!shouldHideSidebar && <Sidebar />}
        <Router/>
    </>
  )
}

export default App
