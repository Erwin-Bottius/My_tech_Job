// import NPM
import { CssBaseline } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

// == Import FICHIER
import Header from 'src/components/header';
import HomeMainConatainer from 'src/components/homeMainContainer';
import ModalSearchContainer from 'src/components/modalSearchContainer';
import useStyles from './style';

// == Composant
const App = () => {
  const classes = useStyles();
  const isDarkBodyColor = useSelector((state) => state.isDarkBodyColor);
  const isSearchFormHidden = useSelector((state) => state.isSearchFormHidden);
  const location = useLocation();

  return (
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
          <div>hello</div>
        </Route>
      </Switch>
      <footer>copiright</footer>
    </div>
  );
};

// == Export
export default App;
