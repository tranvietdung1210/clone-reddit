import { Card, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import PostCard from "./PostCard";
import { useHistory, useLocation } from "react-router";
import RedditService from "../../../services/RedditService";
import InfiniteScroll from "react-infinite-scroll-component";


function Topic(props) {
  const history = useHistory();
  const location = useLocation();
  const [active, setActive] = useState();
  const [listPost, setListPost] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  console.log(props)
  const goToPostDetail = (id) => {
    history.push(`/app/post?postId=${id}`)
  }
  const getListPost = async (topic) => {
    console.log("getListPost")
    try {
      const res = await RedditService.getListPost(topic, page, limit);
      if (res.status === 200) {
        setListPost(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const loadMorePost = async () => {
    console.log("getListPost")
    try {
      const limitSize = limit + 5;
      setLimit(limitSize);
      const res = await RedditService.getListPost(active, page, limitSize);
      if (res.status === 200) {
        setListPost(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const handleChangeTopic = (topic) => {
    history.push(`/app/reddit/${topic}`)
    setActive(topic);
  }

  useEffect(() => {
    if (location.pathname.includes("hot")) {
      setActive("hot");
      getListPost("hot");
    }
    if (location.pathname.includes("new")) {
      setActive("new");
      getListPost("new");
    }
    if (location.pathname.includes("top")) {
      setActive("top");
      getListPost("top");
    }
  }, [location.pathname])
  return (
    <div className="container">
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Card className="px-3 p-2">
            <div className="d-flex justify-content-start">
              <div className={active === "hot" ? "topic-choose-active" : "topic-choose"} onClick={() => handleChangeTopic("hot")}>
                <Icon.Droplet size="20" />
                <span className='mx-1'>Hot</span>
              </div>
              <div className={active === "new" ? "topic-choose-active" : "topic-choose"} onClick={() => handleChangeTopic("new")}>
                <Icon.Newspaper size="20" />
                <span className='mx-1'>New</span>
              </div>
              <div className={active === "top" ? "topic-choose-active" : "topic-choose"} onClick={() => handleChangeTopic("top")}>
                <Icon.BarChart size="20" />
                <span className='mx-1'>Top</span>
              </div>
            </div>
          </Card>
          <InfiniteScroll
            dataLength={listPost.length}
            next={loadMorePost}
            hasMore={true}
          >
            {
              listPost.map((item, index) => (
                <PostCard key={index} data={item} openModalPost={() => goToPostDetail(item.id)} />
              ))
            }
          </InfiniteScroll>
        </Grid>
        <Grid item md={4}>
          <Card className="">
            <div className="header-card">
              <span>About Community</span>
            </div>
            <div className="body-card">
              <div>Dota</div>
              <div className="d-flex">
                <div className="community-content">
                  <div>956k</div>
                  <div>Members</div>
                </div>
                <div className="community-content">
                  <div>5.0k</div>
                  <div>Online</div>
                </div>
              </div>
              <div className="community-foot">
                <Icon.Calendar size="20" />
                <span className="m-2">Created Oct 13, 2010</span>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Topic;