import React from "react";
// components
import BoardHeader from "./components/BoardHeader";
import Topic from "./components/Topic";
import useStyles from "./styles";


export default function Reddit(props) {
  console.log(props);
  let classes = useStyles();
    return (
      <>
        <div>
          <BoardHeader classes={classes} />
        </div>
        <div className="mt-3">
          <Topic props={props}/>
        </div>
      </>
    )
};

