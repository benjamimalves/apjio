import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";
import styles from "../styles/jss/nextjs-material-kit/pages/sobrePage";
import ProductSection from "../pages-sections/SobrePage-Sections/ProductSection";
import TeamSection from "../pages-sections/SobrePage-Sections/TeamSection";
import WorkSection from "../pages-sections/SobrePage-Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <Parallax small filter image="/img/hero/sobre.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.description}>
                  <h2 className={classes.title}>
                    Associação de Pais do Jardim de Infância de Oliveirinha
                  </h2>
                  <p>&nbsp;</p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            {/*}<WorkSection />{*/}
          </div>
        </div>
      </div>
    </>
  );
}
