// import NPM
import { CssBaseline, useMediaQuery } from '@material-ui/core';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Import FICHIER
import Header from 'src/components/header';
import HomePage from 'src/components/homePage';
import ModalSearchContainer from 'src/components/modalSearchContainer';
import ResultPage from 'src/components/resultPage';
import ModalFilters from 'src/components/modalFilters';
import NotFound from 'src/components/notFound';
import About from 'src/components/about';
import JobDetailMobile from 'src/components/jobDetailMobile';
import Footer from 'src/components/footer';
import AppStores from 'src/components/appStores';
import useStyles from './style';

// == Composant
const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const isFiltersModalHidden = useSelector((state) => state.search.isFiltersModalHidden);
  const isSearchFormHidden = useSelector((state) => state.search.isSearchFormHidden);
  const isNavbarOpen = useSelector((state) => state.search.navbarOpen);
  if (isMobile) {
    return (
    // changement de couleur du body et header en fonction de la page
      <div
        className={location.pathname === '/' ? classes.appHomeMobile : classes.app}
      >
        <CssBaseline />
        <ModalSearchContainer />
        <ModalFilters />
        {(isSearchFormHidden && isFiltersModalHidden)
      && (
      <>
        <Header />
        {!isNavbarOpen
        && (
        <>
          <Switch>
            <Route exact path="/">
              <HomePage />
              <About />
              <AppStores />
            </Route>
            <Route exact path="/recherche">
              <ResultPage />
            </Route>
            <Route exact path="/offre-d-emploi/:id">
              <JobDetailMobile />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
        )}
      </>
      )}
        <div />
      </div>
    );
  }
  return (
    <div className={location.pathname === '/' ? classes.appHomeDesktop : classes.app}>
      <CssBaseline />
      <ModalSearchContainer />
      <ModalFilters />
      {(isSearchFormHidden && isFiltersModalHidden)
        && (
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
              <About />
              <AppStores />
            </Route>
            <Route exact path="/recherche">
              <ResultPage />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
        )}
      <div />
    </div>
  );
};

// == Export
export default App;
