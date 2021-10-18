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
import { useHistory } from 'react-router-dom';
// IMPORT FICHIERS
import useStyles from './style';

const ResultPageCard = ({
  logo, job, company, location, date, id,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClickOfferDetail = () => {
    history.push(`/offre-d-emploi/${id}`);
  };
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
        <Button
          onClick={handleClickOfferDetail}
          variant="contained"
          size="small"
          className={classes.button}
        >
          Afficher
        </Button>
      </CardActions>
    </Card>
  );
};

ResultPageCard.defaultProps = {
  logo: 'N/C',
  job: 'N/C',
  company: 'N/C',
  location: 'N/C',
  date: 'N/C',
};

ResultPageCard.propTypes = {
  logo: PropTypes.string,
  job: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string.isRequired,

};

export default ResultPageCard;
