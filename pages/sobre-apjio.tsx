import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Head from "next/head";
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
  const frontMatter = {
    title: "Sobre a APJIO",
    og_url: "https://www.apjio.pt/sobre-apjio",
    og_description: "Associação de Pais do Jardim de Infância de Oliveirinha",
    og_image_url: "https://www.apjio.pt/img/hero/sobre.jpg"
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{`APJIO | ${frontMatter.title}`}</title>
        <meta property="og:site_name" content={`APJIO | ${frontMatter.title}`} />
        <meta property="og:url" content={frontMatter.og_url} />
        <meta property="og:description" content={frontMatter.og_description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={frontMatter.og_image_url} />
      </Head>
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
