import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Parallax filter responsive image="/img/hero/socios.jpg">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Torne-se Sócio.</h1>
            <h4>
              Texto a inserir.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
}
