import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";
import styles from "../styles/jss/nextjs-material-kit/pages/donativoPage";

// Sections for this page
import ProductSection from "../pages-sections/DonativoPage-Sections/ProductSection";

const useStyles = makeStyles(styles);

export default function Donativo() {
  const classes = useStyles();
  const frontMatter = {
    title: "Donativo",
    og_url: "https://www.apjio.pt/donativo",
    og_description: "Ao contribuir estará através da associação de pais, a proporcionar às nossas crianças melhores condições em ambiente escolar, dentro e fora de sala.",
    og_image_url: "https://www.apjio.pt/img/hero/donativo.jpg"
  }

  return (
    <div>
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
      <Parallax small filter image="/img/hero/donativo.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Donativo</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
    </div>
  );
}
