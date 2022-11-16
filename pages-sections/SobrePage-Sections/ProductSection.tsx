import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupWork from "@material-ui/icons/GroupWork";
import Redeem from "@material-ui/icons/Redeem";
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
              description="Ser associado é estar informado sobre assuntos relacionados com a escola, ser ativamente responsável pela educação do seu educando, e poder contribuir para a melhoria das condições de ensino."
              icon={GroupWork}
              iconColor="info"
              vertical
              buttonHref="/socio"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Donativo"
              description="Ao contribuir estará através da associação de pais, a proporcionar às nossas crianças melhores condições em ambiente escolar, dentro e fora de sala."
              icon={Redeem}
              iconColor="success"
              vertical
              buttonHref="/donativo"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Dúvidas"
              description='Tem alguma dúvida, sugestão ou simplesmente dizer um "Olá"!'
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
