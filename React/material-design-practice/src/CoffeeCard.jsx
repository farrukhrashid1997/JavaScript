import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: "pointer",
  },

  
}));

function CoffeeCard(props) {
  const [noWrap, setnoWrap] = useState(true);
  const { avatarUrl, title, subtitle, description, imageUrl } = props;
  const classes = useStyles();

  return (
    <Card className={classes.size}>
      <CardHeader
        avatar={<Avatar src={avatarUrl} aria-label="recipe"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography
          variant="body2"
          component="p"
          className={classes.pointer}
          noWrap={noWrap}
          onClick={() => {
            setnoWrap(!noWrap);
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small">
          BUY NOW
        </Button>
        <Button size="small" variant="contained" color="primary">
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
