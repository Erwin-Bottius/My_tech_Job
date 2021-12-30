// import NPM
import {
  Card, CardContent, Typography, Avatar, Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';

// Import Fichiers

import getDate from 'src/store/functions/getDate';
import useStyles from './style';

const JobDetailDesktop = ({ jobOfferObject }) => {
  const classes = useStyles();
  const cardRef = useRef();
  const jobs = useSelector((state) => state.search.jobs);
  const currentDate = Date.now();
  useEffect(() => {
    cardRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }, [jobs]);

  return (
    <div className={classes.offer__container} ref={cardRef}>
      <Card className={classes.offer__subHeader}>
        <CardContent className={classes.offer__subHeader__cardContent}>
          <div className={classes.card__header}>
            <Avatar
              className={classes.offer__subHeader__avatar}
              alt="logo entreprise"
              // Si l'entreprise a un logo, on le met dans l'avatar,
               // sinon On met le random BackgroundColor
              src={jobOfferObject.origineOffre.partenaires
                ? jobOfferObject.origineOffre.partenaires[0].logo : 'n/c'}
              style={jobOfferObject.origineOffre.partenaires
                ? {}
                : { background: jobOfferObject.avatarBgColor }}
            >
              {/* Si l'entrepirise a un logo, on le met dans l'avatar,
              si Pas de logo mais le nom de l'entreprise
               est renseigné, on met la premiere lettre du nom de l'entrepirsie ;
               Si ni avatar ni nom d'entreprise, ce sera la lettre i par default */}
              {jobOfferObject.origineOffre.partenaires
                ? jobOfferObject.origineOffre.partenaires[0].logo
                : (jobOfferObject.entreprise.nom && jobOfferObject.entreprise.nom.charAt(0))}
            </Avatar>
          </div>
          <div>
            <Typography className={classes.offer__subHeader__subTitle} variant="subtitle1">
              {jobOfferObject.intitule}
            </Typography>
            <Typography className={classes.offer__subHeader__company}>
              {jobOfferObject.entreprise.nom}
            </Typography>
            <Typography variant="body2" className={classes.offer__subHeader__subTitle}>
              {jobOfferObject.lieuTravail.libelle}
            </Typography>
          </div>
          <Button variant="contained" size="small" className={`${classes.button} mainButton`}>
            Postuler
          </Button>
        </CardContent>
      </Card>
      <div className={classes.offer__card}>
        <Typography
          variant="h6"
          className={classes.offer__card__detailTitle}
        >Détails du poste
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.offer__card__subtitle}
        >Type de contrat
          <span className={classes.offer__card__span}> {jobOfferObject.typeContrat}</span>
        </Typography>
        <hr className={classes.offer__card__hr} />
        <Typography
          variant="subtitle1"
          className={classes.offer__card__subtitle}
        >Adresse
          <span className={classes.offer__card__span}> {jobOfferObject.lieuTravail.libelle}</span>
        </Typography>
        <hr className={classes.offer__card__hr} />
        <Typography
          variant="subtitle1"
          className={classes.offer__card__subtitle}
        >Date de publication
          <span
            className={classes.offer__card__span}
          > {getDate(jobOfferObject.dateActualisation, currentDate)}
          </span>
        </Typography>
        <hr className={classes.offer__card__hr} />
        <Typography
          variant="h6"
          className={classes.offer__card__description__title}
        >Description
        </Typography>
        <Typography variant="body1">{jobOfferObject.description}</Typography>
      </div>
    </div>
  );
};

JobDetailDesktop.propTypes = {
  jobOfferObject: PropTypes.shape().isRequired,
};

export default JobDetailDesktop;
