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

const jobOfferCard = ({
  logo, job, company, location, date, id, avatarBgColor, isSelected,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:800px)');
  const handleClickOfferDetail = () => {
    history.push(`/offre-d-emploi/${id}`);
  };
  // ******************* VERSION MOBILE ******************
  if (isMobile) {
    return (
      <Card className={classes.offer}>
        <CardContent>
          <Avatar
            alt="logo entreprise"
            src={logo}
            className={classes.offer__avatar}
            style={logo === 'n/c' ? { background: avatarBgColor } : {}}
          >
            {(logo === 'n/c' && company.charAt(0) !== ' ') ? company.charAt(0) : 'i' }
          </Avatar>
          <Typography variant="subtitle1">
            {job}
          </Typography>
          <Typography className={classes.offer__company}>
            {company}
          </Typography>
          <Typography variant="body2" component="p">
            {location}
          </Typography>
        </CardContent>
        <CardActions className={classes.offer__footer}>
          {date}
          <Button
            onClick={handleClickOfferDetail}
            variant="contained"
            size="medium"
            className={`${classes.offer__footer__button} mainButton`}
          >
            Afficher
          </Button>
        </CardActions>
      </Card>
    );
  }
  // ******************* VERSION DESKTOP ******************

  return (
    <Card
    // si la card a été sélectionnée, on lui attribut la classes selected
      className={`${classes.offerDesktop} ${isSelected && classes.selected}`}
      // Au click sur la card, on attribut le state selected a la card correspondante
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
          className={classes.offer__avatar}
          style={logo === 'n/c' ? { background: avatarBgColor } : {}}
        >
          {(logo === 'n/c' && company.charAt(0) !== ' ') ? company.charAt(0) : 'i' }
        </Avatar>
        <Typography variant="subtitle1">
          {job}
        </Typography>
        <Typography className={classes.offer__company}>
          {company}
        </Typography>
        <Typography variant="body2" component="p">
          {location}
        </Typography>
      </CardContent>
      <CardActions className={classes.offer__footer}>
        {date}
        <Button
          variant="contained"
          size="small"
          className={`${classes.offer__footer__button} mainButton`}
        >
          Postuler
        </Button>
      </CardActions>
    </Card>
  );
};

jobOfferCard.defaultProps = {
  logo: 'N/C',
  job: 'N/C',
  company: 'N/C',
  location: 'N/C',
  date: 'N/C',
  avatarBgColor: 'N/C',
};

jobOfferCard.propTypes = {
  logo: PropTypes.string,
  job: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string.isRequired,
  avatarBgColor: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,

};

export default jobOfferCard;
