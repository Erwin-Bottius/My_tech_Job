// IMPORT NPM
import {
  Card, CardContent, Typography, useMediaQuery,
} from '@material-ui/core';
// IMPORT FICHIERS
import useStyles from './style';

const About = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:800px)');
  if (isMobile) {
    return (
      <>
      </>
    );
  }
  return (
    <div className={classes.about}>
      <Card className={classes.about__card}>
        <CardContent className={classes.about__card__content}>
          <Typography variant="h3" className={classes.about__card__content__title}>
            A Propos
          </Typography>
          <Typography variant="body1" className={classes.about__card__content__description}>
            Mytechjob est un site d’annonces d’offres d’emplois que j’ai réalisé avec React en front
            et Express en back.
            Basé sur Monster.fr pour le design,  j’ai adapté le projet pour en faire un site
            qui sert  exclusivement à trouver un job de développeur.
            Toutes les annonces sont réelles et proviennent de l’API Pole-emploi.io,
            le site n'a cependant aucune prétention commerciale.
          </Typography>
          <Typography variant="body1" className={classes.about__card__content__description}>
            Le but de ce projet était de se rapprocher le plus possible du site Monster.fr,
            j'ai cependant fait le choix d'en faire un site pour rechercher un emploi dans le monde
            du développement web afin que le site me soit utile.
            Grâce à Mytechjob, je peux désormais rechercher toutes les offres d'emplois
            me concernant, en renseigant ma stack technique, ma localistion, mais aussi mon
            expérience et le type de contrat souhaité.
          </Typography>
        </CardContent>
        <div className={classes.about__card__background} />
      </Card>
    </div>
  );
};

export default About;
