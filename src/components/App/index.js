// import NPM
import { CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

// == Import FICHIER
import Header from 'src/components/header';
import HomeMainConatainer from 'src/components/homeMainContainer';
import ModalSearchContainer from 'src/components/modalSearchContainer';
import ResultPageContainer from 'src/components/resultPageContainer';
import useStyles from './style';

// == Composant
const App = () => {
  const classes = useStyles();
  const isSearchFormHidden = useSelector((state) => state.search.isSearchFormHidden);
  const location = useLocation();

  return (
    // Si on est sur la page de resultats de recherche, et qu'on veut faire une nouvelle recherche,
    // on bascule de nouveaux les themes de couleur (body en violet + header en blanc)
    <div className={location.pathname === '/recherche' && isSearchFormHidden ? classes.resultPageTheme : classes.root}>
      <CssBaseline />
      {/* Le header ne s'affiche pas si on est sur la "modale" de recherche d'emploi */}
      {isSearchFormHidden && <Header />}
      { (isSearchFormHidden === false) && <ModalSearchContainer /> }

      <Switch>
        <Route exact path="/">
          {isSearchFormHidden && <HomeMainConatainer />}
        </Route>
        <Route exact path="/recherche">
          {isSearchFormHidden && <ResultPageContainer />}
        </Route>
      </Switch>
      <footer>copiright</footer>
    </div>
  );
};

// == Export
export default App;
