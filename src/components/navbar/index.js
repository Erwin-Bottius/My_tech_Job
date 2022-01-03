// Import Npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// import Fichiers
import {
  TOGGLE_SHOW_NAVBAR,
} from 'src/store/actions';
import useStyles from './style';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navbarOpen = useSelector((state) => state.search.navbarOpen);
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflowY = 'hidden';
    }
    else {
      document.body.style.overflowY = 'auto';
    }
  }, [navbarOpen]);
  return (

    <div className={navbarOpen ? classes.navbarClose : classes.navbarOpen}>
      <Link
        onClick={() => {
          dispatch({
            type: TOGGLE_SHOW_NAVBAR,
          });
        }}
        className={classes.navbar__link}
        to="/"
      >
        Recherche d'offres
      </Link>
      <div className={classes.hr} />
      <Link
        onClick={() => {
          dispatch({
            type: TOGGLE_SHOW_NAVBAR,
          });
        }}
        className={classes.navbar__link}
        to="/#about"
      >
        A propos
      </Link>
      <div className={classes.hr} />
    </div>

  );
};
export default Navbar;
