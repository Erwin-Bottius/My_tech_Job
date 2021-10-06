import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardActions,
  Button,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

import useStyles from './style';

const ResultPageCard = ({
  logo = 'n/c', job, company, location, date,
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

export default ResultPageCard;
