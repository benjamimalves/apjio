import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupWork from "@material-ui/icons/GroupWork";
import CardGiftCard from "@material-ui/icons/CardGiftCard";
import AlternateEmail from "@material-ui/icons/AlternateEmail";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ser Sócio"
              description="[Um breve resumo de porquê ser sócio]"
              icon={GroupWork}
              iconColor="info"
              vertical
              buttonHref="/socio"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Doar"
              description="[Um breve resumo da importância de doar]"
              icon={CardGiftCard}
              iconColor="success"
              vertical
              buttonHref="/doar"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Dúvidas"
              description="[Um breve resumo sobre dúvidas]"
              icon={AlternateEmail}
              iconColor="rose"
              vertical
              buttonHref="/contactos"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
