import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Parallax from "../components/Parallax/Parallax";
import styles from "../styles/jss/nextjs-material-kit/pages/contactosPage";
import WorkSection from "../pages-sections/ContactosPage-Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function Contactos() {
  const classes = useStyles();

  return (
    <>
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
