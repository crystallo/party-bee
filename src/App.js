import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header';
import ContactUs from './components/contactus';
import Faqs from './components/faqs';
import About from './components/about';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route path={ROUTES.CONTACTUS}>
            <ContactUs />
          </Route>
          <Route path={ROUTES.FAQS}>
            <Faqs />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
