import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";

// styles
import useStyles from "./styles";
import { useHistory } from "react-router";

export default function Header(props) {
  const history = useHistory();
  const goToReddit = () => {
    history.push("/app/reddit/hot");
  }
  var classes = useStyles();
  const url = "https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg";
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <div onClick={() => goToReddit()}>
        <img src={url} className="reddit-icon" />
      </div>
    </AppBar>
  );
}
