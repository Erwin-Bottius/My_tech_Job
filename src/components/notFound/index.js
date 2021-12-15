// IMPORT NPM
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// IMPORT FICHIERS
import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <Button variant="outlined" size="large" className={classes.notFound__button}>
        <Link className={classes.notFound__link} to="/">Retour</Link>
      </Button>
      <h1 className={classes.notFound__title}>404</h1>
    </div>
  );
};

export default NotFound;
