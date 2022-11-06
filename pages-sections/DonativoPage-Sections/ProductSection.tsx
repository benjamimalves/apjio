import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";

import styles from "../../styles/jss/nextjs-material-kit/pages/donativoPageSections/productStyle";
import Quote from "../../components/Typography/Quote";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <h5 className={classes.description}>
            Ao contribuir estará através da associação de pais, a proporcionar às nossas crianças 
            melhores condições em ambiente escolar, dentro e fora de sala.
            <br/>
            A associação trabalha ativamente em conjunto com o corpo docente para que o jardim de infância seja
            um local onde as nossas crianças se sintam felizes, motivadas a aprender e criem boas memórias desde o
            inicio do seu percurso escolar, para isso necessitamos do vosso apoio para assegurar as melhores condições 
            pedagógicas e lúdicas, porque:
          </h5>
          <Quote
            text='"O brincar é a mais alta forma de pesquisa."'
            author=" Albert Einstein"
          />
          <p className={classes.description}>
            <b>Os donativos deverão ser efetuados até ao dia 15 de cada mês.</b>
          </p>
          <p className={classes.description}>
            Podem ser realizados de duas formas:
            <br/>
            <b>1. Transferência bancária, para a conta que a APJIO possui no banco BPI, para o seguinte IBAN:</b>
          </p>
          <h4 className={classes.iban}>PT50 0010 0000 5562 3870 0017 5</h4>
          <p className={classes.description}>
            Solicitamos a entrega do comprovativo ou o envio do mesmo por email para <a href="mailto:apjio@sapo.pt">apjio@sapo.pt</a> e na descrição coloque o nome do seu educando e a sala a que pertence.
          </p>
          <p className={classes.description}>
            <b>2. Entrega em mão à respectiva professora em bolsa fechada com o nome do aluno e sala.</b>
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
