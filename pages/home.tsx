import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";
import styles from "../styles/jss/nextjs-material-kit/pages/homePage";
import ProductSection from "../pages-sections/SobrePage-Sections/ProductSection";
import WorkSection from "../pages-sections/SobrePage-Sections/WorkSection";
import Button from "../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <Parallax filter image="/img/hero/home.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Bem-vindo ao nosso espaço</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
