import {
  Avatar, Typography, Button, useMediaQuery,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { RESET_SEARCH_ERROR } from 'src/store/actions';
import ghost from 'src/assets/images/ghost.png';
import useStyles from './style';

const Error = () => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();
  const dispatch = useDispatch();
  // ********************* MOBILE VERSION ***********************
  if (isMobile) {
    return (
      <>
        <Avatar alt="ghost" src={ghost} className={classes.ghost} />
        <Typography variant="h5" className={classes.title}>Nous sommes désolés!</Typography>
        <Typography variant="body1">Nous n’avons pas trouvé d’emplois correspondant à vos
          critères. Veuillez modifier votre recherche et réessayer.
        </Typography>
        <Link
          to="/"
        >
          <Button
            variant="contained"
            size="large"
            className={classes.searchButton}
            onClick={() => {
              dispatch({ type: RESET_SEARCH_ERROR });
            }}
          >
            Recommencer
          </Button>
        </Link>
      </>
    );
  }
  // ********************* DESKTOP VERSION ***********************
  return (
    <div className={classes.desktop__container}>
      <Avatar alt="ghost" src={ghost} className={classes.ghost__desktop} />
      <Typography variant="h5" className={classes.title__desktop}>Nous sommes désolés!</Typography>
      <Typography variant="body1" className={classes.info__desktop}>Nous n’avons pas trouvé d’emplois correspondant à vos
        critères. Veuillez modifier votre recherche et réessayer.
      </Typography>
      <Link
        to="/"
      >
        <Button
          variant="contained"
          size="large"
          className={classes.searchButton}
          onClick={() => {
            dispatch({ type: RESET_SEARCH_ERROR });
          }}
        >
          Recommencer
        </Button>
      </Link>
    </div>
  );
};

export default Error;
