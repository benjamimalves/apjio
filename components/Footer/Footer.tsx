/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../styles/jss/nextjs-material-kit/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props: FooterProps) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
              <a
                href="/sobre-apjio"
                className={classes.block}
              >
                Sobre a APJIO
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contactos"
                className={classes.block}
              >
                Contactos
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} por{" "}
          <a
            href="https://www.benjamimalves.com"
            className={aClasses}
            target="_blank"
          >
            Benjamim Alves
          </a>
        </div>
      </div>
    </footer>
  );
}

export interface FooterProps {
  whiteFont?: boolean
};
