import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import classNames from "classnames";
import Parallax from "../components/Parallax/Parallax";
import styles from "../styles/jss/nextjs-material-kit/pages/contactosPage";
import WorkSection from "../pages-sections/ContactosPage-Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function Contactos() {
  const classes = useStyles();
  const frontMatter = {
    title: "Contactos",
    og_url: "https://www.apjio.pt/contactos",
    og_description: 'Tem alguma dúvida, sugestão ou simplesmente dizer um "Olá"!',
    og_image_url: "https://www.apjio.pt/img/hero/contactos.jpg"
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
      <Parallax small filter image="/img/hero/contactos.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
      </div>
    </>
  );
}
