// import NPM
import { CssBaseline } from '@material-ui/core';
import { Switch, Route, useLocation } from 'react-router-dom';

// == Import FICHIER
import Header from 'src/components/header';
import HomeMainConatainer from 'src/components/homeMainContainer';
import ModalSearchContainer from 'src/components/modalSearchContainer';
import ResultPageContainer from 'src/components/resultPageContainer';
import JobOffer from 'src/components/jobOffer';
import ModalFilters from '../modalFilters';
import useStyles from './style';

// == Composant
const App = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    // changement de couleur du body et header en fonction de la page
    <div className={location.pathname === '/' ? classes.root : (classes.resultPageTheme)}>
      <CssBaseline />

      <Header />
      <ModalSearchContainer />
      <ModalFilters />
      <Switch>
        <Route exact path="/">
          <HomeMainConatainer />
        </Route>
        <Route exact path="/recherche">
          <ResultPageContainer />
        </Route>
        <Route exact path="/offre-d-emploi/:id">
          <JobOffer />
        </Route>
      </Switch>
      <footer>copiright</footer>
    </div>
  );
};

// == Export
export default App;
