import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import React from 'react'
//pages
import ScenicSpot from './pages/ScenicSpot'
import NotFoundPage from './pages/NotFoundPage'
import City from './pages/City'

//components
import Maincontain from './component/Maincontain'
import MyNavbar from './component/MyNavbar'

function App(props) {
  return (
    <div key={props.location.key}>
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <MyNavbar />
          <Maincontain>
            <Switch>
              <Route
                path="/scenicSpot/:city"
                render={(props) => (
                  <City key={props.match.params.city} {...props} />
                )}
              />

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
    </div>
  )
}

export default withRouter(App)
