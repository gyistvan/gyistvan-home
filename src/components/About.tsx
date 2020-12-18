import React from "react";
import "../assets/styles/About.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core/";
import presta1 from "../assets/images/dhms1.png";
import presta2 from "../assets/images/dhms2.png";
import presta3 from "../assets/images/dhms3.png";
import presta4 from "../assets/images/hegasztalcom1.png";
import presta5 from "../assets/images/hegasztalcom2.png";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)"
    },
    title: {
      color: theme.palette.primary.light
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    }
  })
);

function About() {
  const classes = useStyles();

  const rightGridListContent = [
    {
      image: presta1,
      title: ""
    },
    {
      image: presta2,
      title: ""
    },
    {
      image: presta3,
      title: ""
    },
    {
      image: presta4,
      title: ""
    },
    {
      image: presta5,
      title: ""
    }
  ];
  return (
    <>
      <div className="container">
        <div className="left">
          <p>About me...</p>
          <p> My name is István Gyarmati</p>{" "}
          <p>I born at 1991-10-06, in Budapest, Hungary.</p>
          <p>
            In the past 4 years I built some sites with Wordpress and Prestashop
          </p>
        </div>
        <div className="right">
          <GridList className={classes.gridList} cols={2.5}>
            {rightGridListContent.map(content => (
              <GridListTile key={content.image}>
                <img src={content.image} alt={content.title} />
                <GridListTileBar
                  title={content.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${content.title}`}>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </>
  );
}

export default About;
