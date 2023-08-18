import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './components/screen/homeScreen/HomeScreen';
import './_app.scss'
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import WatchScreen from './components/screen/watchScreen/WatchScreen';
import LoginScreen from './components/screen/loginScreen/LoginScreen';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className='app__main '>
          {children}
        </Container>
      </div>
    </>
  )
}
function App() {
  const { accessToken, loading } = useSelector(state => state.auth)

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }
  }, [accessToken, loading, navigate])


  return (

    <Routes>
      <Route path='/' exact element={<Layout>
        <HomeScreen />
      </Layout>}>
      </Route>
      <Route path='/auth' element={<LoginScreen />}></Route>
      <Route path='/search' element={<h1>Seachrch</h1>} />
      <Route path='/watch/:id' element={
        <Layout>
          <WatchScreen />
        </Layout>} />
      <Route path='/search/:query' element={<h1>Not found</h1>} />
    </Routes>

  );

}

export default App;
