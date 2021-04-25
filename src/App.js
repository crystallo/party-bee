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
import * as ROUTES from './constants/routes';

import Collections from './pages/collections';

// const Collections = lazy(() => import('./pages/collections'));

library.add(fab);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={ROUTES.ABOUT} >
          <About />
        </Route>
        <Route path={ROUTES.COLLECTIONS}>
          <Collections />
        </Route>
        <Route path={ROUTES.CONTACTUS}>
          <ContactUs />
        </Route>
        <Route path={ROUTES.FAQS}>
          <Faqs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
