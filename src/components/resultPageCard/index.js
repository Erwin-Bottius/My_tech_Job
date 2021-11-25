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
  logo, job, company, location, date, id, avatarBgColor,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClickOfferDetail = () => {
    history.push(`/offre-d-emploi/${id}`);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar
          alt="logo entreprise"
          src={logo}
          className={classes.avatar}
          style={logo === 'n/c' ? { background: avatarBgColor } : {}}
        >
          {(logo === 'n/c' && company.charAt(0) !== ' ') ? company.charAt(0) : 'i' }
        </Avatar>
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
  avatarBgColor: 'N/C',
};

ResultPageCard.propTypes = {
  logo: PropTypes.string,
  job: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string.isRequired,
  avatarBgColor: PropTypes.string,

};

export default ResultPageCard;
