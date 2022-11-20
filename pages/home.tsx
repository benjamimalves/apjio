import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Parallax from "../components/Parallax/Parallax";
import styles from "../styles/jss/nextjs-material-kit/pages/homePage";
import ProductSection from "../pages-sections/SobrePage-Sections/ProductSection";
import WorkSection from "../pages-sections/SobrePage-Sections/WorkSection";
import BlogCard from "../components/Blog/BlogCard";

const useStyles = makeStyles(styles);

export default function HomePage() {
  const classes = useStyles();
  
  return (
    <div>
      <Parallax filter image="/img/hero/home.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Bem-vindo ao nosso espaço</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer alignItems="center" justifyContent="center">
            <GridItem>
              <h2 className={classes.blogTitle}>
                Blog
              </h2>
              <BlogCard post={{
                "title": "Dia do Pijama",
                "published": "Sun Nov 20 2022",
                "description": "20 Novembro 2022",
                "image_url": "/img/blog/pijama.jpg",
                "slug": "dia-do-pijama-2022"
                }}
              />
            </GridItem>
          </GridContainer>
          <ProductSection />
          {/*}<WorkSection />{*/}
        </div>
      </div>
    </div>
  );
}
