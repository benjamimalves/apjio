import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "../../components/CustomButtons/Button";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contacte-nos</h2>
          <h4 className={classes.description}>
            Tem alguma dúvida, sugestão ou simplesmente dizer um "Olá"!
            {/*}
            <br/>
            Preencha o formulário abaixo.
            {*/}
          </h4>
          <h5 className={classes.textCenter}>
            Envie-nos email para <a href="mailto:apjio@sapo.pt">apjio[at]sapo.pt</a>
          </h5>
          {/*}
            <form>
              <GridContainer>
                <GridItem>
                  <CustomInput
                    labelText="Nome Completo"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Telefone"
                    id="phone"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Mensagem"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="info">Enviar</Button>
                </GridItem>
              </GridContainer>
            </form>
          {*/}
        </GridItem>
      </GridContainer>
    </div>
  );
}
