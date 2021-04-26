import './App.css';

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './components/header';
import ContactUs from './components/contactus';
import Faqs from './components/faqs';
import About from './components/about';
import Footer from './components/footer';
import Collections from './components/collections';
import BounceHouse from './components/bouncehouse';
import * as ROUTES from './constants/routes';
// const Collections = lazy(() => import('./pages/collections'));

library.add(fab);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={ROUTES.ABOUT} >
          <About />
        </Route>
        <Route exact path={ROUTES.COLLECTIONS}>
          <Collections />
        </Route>
        <Route exact path={ROUTES.CONTACTUS}>
          <ContactUs />
        </Route>
        <Route exact path={ROUTES.FAQS}>
          <Faqs />
        </Route>
        <Route path={`${ROUTES.COLLECTIONS}/:productID`}>
          <BounceHouse />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
