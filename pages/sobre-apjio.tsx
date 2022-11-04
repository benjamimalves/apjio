import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";
import Button from "../components/CustomButtons/Button";

import styles from "../styles/jss/nextjs-material-kit/pages/sobrePage";
import ProductSection from "../pages-sections/SobrePage-Sections/ProductSection";
import TeamSection from "../pages-sections/SobrePage-Sections/TeamSection";
import WorkSection from "../pages-sections/SobrePage-Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <>
      <Parallax small filter image="/img/profile-bg.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.image}>
                    <img
                      src="/img/logo.png"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Associação de Pais do Jardim de Infância N2 Ovar</h3>
                    <Button target="_blank" href="https://www.facebook.com/apjioliveirinha" justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                [Descrição sobre a associação]
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </div>
    </>
  );
}
