function BoardHeader(props) {
  const { classes } = props
  const url = "https://styles.redditmedia.com/t5_2s580/styles/bannerBackgroundImage_5l1s0k4rvbr71.png?width=4000&s=d1776868bd2be4fd46ee281efaa103cac7b6c2af"
  const avatar = "https://styles.redditmedia.com/t5_2s580/styles/communityIcon_7fu1ixwtsn661.png?width=256&s=7cf7106da701c2fe71cf4917f429ccf16d84066a";
  return (
    <>
      <div className={classes.groupHeader}>
        <div className={classes.boardHeader} style={{ background: `url(${url}) center center / cover no-repeat rgb(37, 25, 22)` }}>
        </div>
        <div className={classes.pageHeader}>
          <div className={classes.pageImage}>
            <img src={avatar} className={classes.avatar} />
            <div className={classes.pageTitle}>
              <div className={classes.title}>
                <h1 className={classes.titleH1}>
                  Dota 2 on Reddit
                </h1>
                <h2 className={classes.titleH2}>
                  r/Dota2
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardHeader;