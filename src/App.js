import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'
//pages
import ScenicSpot from './pages/ScenicSpot'
import NotFoundPage from './pages/NotFoundPage'
import City from './pages/City'

//components
import Maincontain from './component/Maincontain'
import MyNavbar from './component/MyNavbar'

function App() {
  const [changecity, setChangecity] = useState(false)

  return (
    <Router>
      <>
        <MyNavbar changecity={changecity} setChangecity={setChangecity} />
        <Maincontain>
          <Switch>
            <Route path="/scenicSpot/:city">
              <City changecity={changecity} setChangecity={setChangecity} />
            </Route>
            <Route path="/scenicSpot">
              <ScenicSpot />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Maincontain>
      </>
    </Router>
  )
}

export default App
