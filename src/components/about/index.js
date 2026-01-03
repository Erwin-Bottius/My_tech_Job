// IMPORT NPM
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
// IMPORT FICHIERS
import useStyles from "./style";

const About = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:800px)");
  if (isMobile) {
    return (
      <div className={classes.about} id="about">
        <Card className={classes.about__card}>
          <CardContent className={classes.about__card__content}>
            <Typography
              variant="h3"
              className={classes.about__card__content__title}
            >
              A Propos
            </Typography>
            <Typography
              variant="body1"
              className={classes.about__card__content__description}
            >
              Mytechjob est un site d’annonces d’offres d’emploi que j’ai
              réalisé avec React en front et Express en back. Basé sur
              Monster.fr pour le design, j’ai adapté le projet pour en faire un
              site qui sert exclusivement à trouver un job de développeur.
              Toutes les annonces sont réelles et proviennent de l’API
              France-travail.io, le site n'a cependant aucune prétention
              commerciale.
            </Typography>
          </CardContent>
          <div className={classes.about__card__background} />
        </Card>
      </div>
    );
  }
  return (
    <div className={classes.aboutDesktop}>
      <Card className={classes.aboutDesktop__card}>
        <CardContent className={classes.aboutDesktop__card__content}>
          <Typography
            variant="h3"
            className={classes.aboutDesktop__card__content__title}
          >
            A Propos
          </Typography>
          <Typography
            variant="body1"
            className={classes.aboutDesktop__card__content__description}
          >
            Mytechjob est un site d’annonces d’offres d’emploi que j’ai réalisé
            avec React en front et Express en back. Basé sur Monster.fr pour le
            design, j’ai adapté le projet pour en faire un site qui sert
            exclusivement à trouver un job dans le digital. Toutes les annonces
            sont réelles et proviennent de l’API France-travail.io, le site n'a
            cependant aucune prétention commerciale.
          </Typography>
        </CardContent>
        <div className={classes.aboutDesktop__card__background} />
      </Card>
    </div>
  );
};

export default About;
