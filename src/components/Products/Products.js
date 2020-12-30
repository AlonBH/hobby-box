import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import novBox from '../../assets/images/nov-20-box.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '80%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {
  const classes = useStyles();

  const products = [
    {
      img: novBox,
      title: 'November\'s box'
    },
    {
      img: novBox,
      title: 'November\'s box'
    },
    {
      img: novBox,
      title: 'November\'s box'
    },
    {
      img: novBox,
      title: 'November\'s box'
    },
    {
      img: novBox,
      title: 'November\'s box'
    },
    {
      img: novBox,
      title: 'November\'s box'
    }
  ];

  return (
    <div className={classes.root}>
      <GridList cols={3} cellHeight={300} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {products.map((product, index) => (
          <GridListTile key={index}>
            <img src={product.img} alt={product.title} />
            <GridListTileBar
              title={product.title}
              actionIcon={
                <IconButton aria-label={`info about ${product.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
