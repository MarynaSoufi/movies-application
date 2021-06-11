import styles from './App.module.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AccountPage,
  DetailPage,
  HomePage,
  MoviesPage,
  SearchPage,
  ShowsPage } from './pages'
import * as Routes from './routes'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path={Routes.MOVIES}>
                <MoviesPage/>
            </Route>
            <Route path={Routes.SHOWS}>
                <ShowsPage/>
            </Route>
            <Route path={Routes.ACCOUNT}>
                <AccountPage/>
            </Route>
            <Route path={Routes.SEARCH}>
                <SearchPage/>
            </Route>
            <Route path={Routes.DETAIL}>
              <DetailPage/>
            </Route>
            <Route path={Routes.HOME}>
                <HomePage/>
            </Route>
         
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
