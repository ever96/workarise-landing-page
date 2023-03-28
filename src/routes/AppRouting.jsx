import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Pricing from '@pages/Pricing';
import AboutUs from '@pages/AboutUs';
import Contact from '@pages/Contact';
import { Header } from '../components/Header/Header.component';

const AppRouting = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home />
          }
        />
        <Route
          path='/pricing'
          element={
            <Pricing />
          }
        />
        <Route
          path='/about-us'
          element={
            <AboutUs />
          }
        />
        <Route
          path='/contact'
          element={
            <Contact />
          }
        />
      </Routes>
    </>
  )
}

export default AppRouting