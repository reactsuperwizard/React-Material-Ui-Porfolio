import { MoreVert, FavoriteBorder, Favorite, Share } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from '@mui/material';
import React from 'react';

const Post: React.FunctionComponent = () => {
  return (
    <>
      <Card sx={{ marginTop: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#d12f2f' }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title='John Doe'
          subheader='September 14, 2022'
        />
        <CardMedia
          component='img'
          height='20%'
          image='https://images.pexels.com/photos/11431628/pexels-photo-11431628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
