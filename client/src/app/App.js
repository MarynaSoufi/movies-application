import { AuthProvider, FirebaseProvider } from './contexts/firebase';
import { PrivateRoute } from './utilities';
import { appConfig } from './config'
import styles from './App.module.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  DetailPage,
  SignInPage,
  HomePage,
  MoviesPage,
  NotFoundPage,
  SearchPage,
  ShowsPage } from './pages'
import * as Routes from './routes'

function App() {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
            <Router basename={appConfig.BASIC_URL}>
              <Switch>
                <Route path={Routes.AUTH_SIGN_IN} component={SignInPage} />  
                <PrivateRoute exact path={Routes.MOVIES} component={MoviesPage} />
                <PrivateRoute exact path={Routes.SHOWS} component={ShowsPage} />
                {/* <Route path={Routes.ACCOUNT} component={AccountPage} /> */}
                <PrivateRoute exact path={Routes.SEARCH} component={SearchPage} />
                <PrivateRoute exact path={Routes.DETAIL} component={DetailPage} />
                <PrivateRoute exact path={Routes.HOME} component={HomePage} />
                <Route component={NotFoundPage}/>
              </Switch>
            </Router>  
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
