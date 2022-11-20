/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "../CustomButtons/Button";

import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/sobre-apjio"
          color="transparent"
          className={classes.navLink}
        >
          A APJIO
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/socio"
          color="transparent"
          className={classes.navLink}
        >
          Torne-se sócio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/donativo"
          color="transparent"
          className={classes.navLink}
        >
          Donativo
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/blog"
          color="transparent"
          className={classes.navLink}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contactos"
          color="transparent"
          className={classes.navLink}
        >
          Contactos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Siga-nos no Facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/apjioliveirinha"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
