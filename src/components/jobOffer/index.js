// import NPM
import {
  Card, CardContent, Typography, Avatar, Button,
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

// Import Fichiers
import getJobObject from 'src/store/selectors/jobOfferSelector';
import useStyles from './style';

const JobOffer = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const jobs = useSelector((state) => state.search.jobs);
  const jobOfferObject = getJobObject(id, jobs);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.offer__container}>
      <Card className={classes.offer__subHeader}>
        <CardContent className={classes.offer__subHeader__cardContent}>
          <div>
            <Avatar
              className={classes.offer__subHeader__avatar}
              alt="logo entreprise"
              src={jobOfferObject.origineOffre.partenaires
                ? jobOfferObject.origineOffre.partenaires[0].logo : 'n/c'}
            />
          </div>
          <div>
            <Typography className={classes.offer__subHeader__subTitle} variant="subtitle1">
              {jobOfferObject.intitule}
            </Typography>
            <Typography color="textSecondary">
              {jobOfferObject.entreprise.nom}
            </Typography>
            <Typography variant="body2" component="p">
              {jobOfferObject.lieuTravail.libelle}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div className={classes.offer__card}>
        <Typography
          variant="h6"
          className={classes.offer__card__detailTitle}
        >DÉTAILS DU POSTE
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.offer__card__subtitle}
        >TYPE DE CONTRAT
          <span className={classes.offer__card__span}> {jobOfferObject.typeContrat}</span>
        </Typography>
        <hr className={classes.offer__card__hr} />
        <Typography
          variant="subtitle1"
          className={classes.offer__card__subtitle}
        >ADRESSE
          <span className={classes.offer__card__span}> {jobOfferObject.lieuTravail.libelle}</span>
        </Typography>
        <hr className={classes.offer__card__hr} />
        <Typography
          variant="subtitle1"
          className={classes.offer__card__subtitle}
        >DATE DE PUBLICATION
          <span className={classes.offer__card__span}> {jobOfferObject.dateActualisation}</span>
        </Typography>
        <hr className={classes.offer__card__hr} />
        <Typography
          variant="h6"
          className={classes.offer__card__description__title}
        >DESCRIPTION
        </Typography>
        <Typography variant="body1">{jobOfferObject.description}</Typography>
      </div>
      <Card className={classes.offer__footer}>
        <CardContent className={classes.offer__footer__cardContent}>
          <a
            className={classes.offer__back__link}
            onClick={() => history.goBack()}
          > &lt; retour aux résultats
          </a>
          <Button
            variant="contained"
            size="small"
            className={classes.offer__button}
          > Postuler
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobOffer;
