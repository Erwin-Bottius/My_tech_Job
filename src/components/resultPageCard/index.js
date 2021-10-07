// IMPORT NPM
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActions,
  Button,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
// IMPORT FICHIERS
import useStyles from './style';

const ResultPageCard = ({
  logo = 'n/c', job = 'n/c', company = 'n/c', location = 'n/c', date = 'n/c',
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar alt="logo entreprise" src={logo} />
        <Typography variant="subtitle1">
          {job}
        </Typography>
        <Typography color="textSecondary">
          {company}
        </Typography>
        <Typography variant="body2" component="p">
          {location}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        {date}
        <Button variant="contained" size="small" className={classes.button}>
          Afficher
        </Button>
      </CardActions>
    </Card>
  );
};

ResultPageCard.propTypes = {
  logo: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

};

export default ResultPageCard;
