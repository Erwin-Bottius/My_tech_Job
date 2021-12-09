// IMPORT NPM
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActions,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// IMPORT FICHIERS
import { SET_ISSELECTED_JOB } from 'src/store/actions';
import useStyles from './style';

const ResultPageCard = ({
  logo, job, company, location, date, id, avatarBgColor, isSelected,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:800px)');
  const handleClickOfferDetail = () => {
    history.push(`/offre-d-emploi/${id}`);
  };
  if (isMobile) {
    return (
      <Card className={classes.card}>
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
          <Typography className={classes.card__company}>
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
            size="medium"
            className={classes.button}
          >
            Afficher
          </Button>
        </CardActions>
      </Card>
    );
  }
  return (
    <Card
      className={`${classes.cardDesktop} ${isSelected && classes.selected}`}
      onClick={() => {
        dispatch({
          type: SET_ISSELECTED_JOB,
          jobId: id,
        });
      }}
    >
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
        <Typography className={classes.card__company}>
          {company}
        </Typography>
        <Typography variant="body2" component="p">
          {location}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        {date}
        <Button
          variant="contained"
          size="small"
          className={`${classes.button} mainButton`}
        >
          Postuler
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
  isSelected: PropTypes.bool.isRequired,

};

export default ResultPageCard;
