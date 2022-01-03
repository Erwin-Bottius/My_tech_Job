// Import Npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

// import Fichiers
import {
  TOGGLE_SHOW_NAVBAR,
} from 'src/store/actions';
import useStyles from './style';

const Navbar = ({ setOpen }) => {
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
          setOpen();
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
          setOpen();
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

Navbar.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
export default Navbar;
