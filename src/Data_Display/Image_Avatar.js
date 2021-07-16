import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/cards/obama.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/cards/trump.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/cards/biden.jpg" />
    </div>
  );
}
