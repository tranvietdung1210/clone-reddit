import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";

// context
import { useLayoutState } from "../../context/LayoutContext";
import Reddit from "../../pages/reddit/Reddit";
import PostDetail from "../../pages/reddit/components/PostDetails";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/reddit/hot" component={Reddit} />
              <Route path="/app/reddit/new" component={Reddit} />
              <Route path="/app/reddit/top" component={Reddit} />
              <Route path="/app/post" component={PostDetail} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
