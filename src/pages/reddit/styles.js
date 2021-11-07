import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  groupHeader: {
    backgroundColor: "#fff",
    marginTop: "-25px"
  },
  boardHeader: {
    height: "192px",
    cursor: "pointer"
  },
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "900px"
  },
  pageImage: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "12px",
    marginTop: "-14px"
  },
  avatar: {
    borderRadius: "100%",
    border: "4px solid #fff",
    display: "inline-block",
    height: "72px",
    width: "72px",
  },
  pageTitle: {
    display: "inline-flex",
    alignItems: "flex-start",
    marginTop: "24px",
    position: "relative",
    paddingLeft: "16px",

  },
  title: {
    display: "inline-block",
  },
  titleH1: {
    flex: 1,
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "32px",
    overflow: "hidden",
    padding: "0 2px 4px 0",
    textOverflow: "ellipsis",
    width: "100%",
    margin: 0,
    color: "#1c1c1c"
  },
  titleH2: {
    flex: 1,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "18px",
    margin: 0,
    color: "#7c7c7c"
  }
}));
