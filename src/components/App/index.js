// import NPM
import { CssBaseline } from '@material-ui/core';
import { Switch, Route, useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector } from 'react-redux';

// == Import FICHIER
import HeaderMobile from 'src/components/headerMobile';
import HomeMobile from 'src/components/homeMobile';
import ModalSearchContainer from 'src/components/modalSearchContainer';
import ResultPageContainer from 'src/components/resultPageContainer';
import JobOffer from 'src/components/jobOffer';
import HeaderDesk from 'src/components/headerDesktop';
import ModalFilters from 'src/components/modalFilters';
import HomeDesk from 'src/components/homeDesktop';
import ResultContainerDesktop from 'src/components/resultContainerDesktop/';
import useStyles from './style';

// == Composant
const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const isFiltersModalHidden = useSelector((state) => state.search.isFiltersModalHidden);
  const isSearchFormHidden = useSelector((state) => state.search.isSearchFormHidden);

  return (
    // changement de couleur du body et header en fonction de la page
    <div className={location.pathname === '/' ? classes.root : classes.resultPageTheme}>
      <CssBaseline />
      { isMobile
        ? <HeaderMobile />
        : <HeaderDesk />}
      <ModalSearchContainer />
      <ModalFilters />
      <Switch>
        <Route exact path="/">
          { isMobile
            ? <HomeMobile />
            : <HomeDesk />}
        </Route>
        <Route exact path="/recherche">
          {isMobile
            ? (isFiltersModalHidden && isSearchFormHidden && <ResultPageContainer />)
            : <ResultContainerDesktop />}
        </Route>
        <Route exact path="/offre-d-emploi/:id">
          <JobOffer />
        </Route>
      </Switch>
      <div />
    </div>
  );
};

// == Export
export default App;
