import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import styles from "../../styles/jss/nextjs-material-kit/pages/donativoPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <p className={classes.description}>
            Ser associado é estar informado sobre assuntos relacionados com a escola, ser ativamente responsável pela
            educação do seu educando, e poder contribuir para a melhoria das condições de ensino.
            <br/>
            Participar na organização e desenvolvimento de atividades de caráter educativo e lúdico.
          </p>
          <p className={classes.description}>
            Para ser sócio da APJIO, terá de ser feito o pagamento da quota anual de 5€, pode ser realizado de duas formas:
            <br/>
            <b>1. Transferência bancária, para a conta que a APJIO possui no banco BPI, para o seguinte IBAN:</b>
          </p>
          <h4 className={classes.iban}>PT50 0010 0000 5562 3870 0017 5</h4>
          <p className={classes.description}>
            Solicitamos a entrega do comprovativo ou o envio do mesmo por email para <a href="mailto:apjio@sapo.pt">apjio@sapo.pt</a>
          </p>
          <p className={classes.description}>
            <b>2. Entrega em mão à respectiva professora em bolsa fechada com o nome do aluno e sala.</b>
          </p>
          <p className={classes.description}>
            Em ambos os casos pedimos que nos faça chegar os seguintes dados:
            <br/>
            - Nome do encarregado de educação;<br/>
            - Nome do educando;<br/>
            - Sala a que pertence;<br/>
            - Telefone/telemóvel;<br/>
            - Email
          </p>
          <h3 className={classes.descriptionBold}>Estatutos</h3>
          <h4 className={classes.descriptionBold}>Artigo 6.º - Associados</h4>
          <p className={classes.description}>
            São associados por direito próprio o pai, a mãe que exerçam poder paternal ou encarregado de educação dos
            alunos da Escola que se inscrevam na APJIO.
            <br/>
            1 - A inscrição é feita mediante o preenchimento e a assinatura do boletim fornecido pela APJIO.
            <br/>
            2 - O casal, o pai ou a mãe, considera-se para todos os efeitos um só associado, podem ser representados por qualquer dos membros.
          </p>
          <h4 className={classes.descriptionBold}>Artigo 7.º - Direito dos direitos dos Associados</h4>
          <p className={classes.description}>
            1) Eleger e serem eleitos para quaisquer cargos desta Associação;
            <br/>
            2) Participar em todas as actividades da Associação;
            <br/>
            3) Serem informados das actividades desenvolvidas e a desenvolver pela Associação;
          </p>
          <h4 className={classes.descriptionBold}>Artigo 8.º - Deveres dos Associados</h4>
          <p className={classes.description}>
            Constituem deveres dos associados, designadamente:
            <br/>
            1) Pagarem as quotas fixadas pela assembleia geral, observando as determinações por esta definida;
            <br/>
            2) Comparecerem as reuniões para que forem convocados;
            <br/>
            3) Aceitarem os presentes estatutos;
            <br/>
            4) Exercerem os cargos para que forem eleitos, salvo motivo justificado;
            <br/>
            5) Colabolarem na aquisição de fundos.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
