import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import default_style from './theme/App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import HeaderComponent from './layout/header'
import FooterComponent from './layout/footer'
import HomePage from './pages/Home'
import EducationPage from './pages/Education'
import TimelinePage from './pages/Timeline'
import FavoritePage from './pages/Favorite'
import ProjectPage from './pages/Project'
import ErrorPage from './pages/404'

function App() {
  const [ scrollToggle, setScrollToggle ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    setScrollToggle(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
  })

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' })
  }

  return (
    <>
      <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/education' element={<EducationPage />}></Route>
          <Route path='/timeline' element={<TimelinePage />}></Route>
          <Route path='/favorite' element={<FavoritePage />}></Route>
          <Route path='/project' element={<ProjectPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <div className={default_style.AppScrollToTop} toggle={scrollToggle ? 1 : 0} onClick={scrollToTop}><FontAwesomeIcon icon={faAngleUp} /></div>
      <FooterComponent />
    </>
  );
}

export default App;
