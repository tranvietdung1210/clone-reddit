import { Card, Grid } from "@material-ui/core";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import { useHistory, useLocation } from "react-router";
import { convertTag, formatNumber, timeSince } from "../../../helper/utilities";
import RedditService from "../../../services/RedditService";


function PostDetail(props) {
  const history = useHistory();
  const location = useLocation();
  const [detailState, setDetailsState] = useState({
    id: "",
    posted_by: "",
    avatar_poster: "",
    created_at: "",
    title: "",
    content: "",
    tag: [],
    upVote_count: "",
    comment_count: "",
    topic: ""
  })
  const avaGroup = "https://styles.redditmedia.com/t5_2s580/styles/communityIcon_7fu1ixwtsn661.png?width=256&s=7cf7106da701c2fe71cf4917f429ccf16d84066a";
  const handleBack = () => {
    history.goBack();
  };
  const getPostDetails = async (postId) => {
    try {
      const res = await RedditService.getPostDetails(postId);
      const { status, data } = res;
      if (status === 200) {
        setDetailsState((state) => ({
          ...state,
          id: data.id,
          posted_by: data.posted_by,
          avatar_poster: data.avatar_poster,
          created_at: data.created_at,
          title: data.title,
          content: data.content,
          tag: data.tag,
          upVote_count: data.upVote_count,
          comment_count: data.comment_count,
          topic: data.topic
        }))
      }
    } catch (err) {
      console.log(err);
    }
  }
  useState(() => {
    const query = new URLSearchParams(location.search);
    const postId = query.get("postId");
    getPostDetails(postId);
  }, [])
  return (
    <>
      <Modal
        show={true}
        onHide={handleBack}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <div className="detail-modal-title">
            <div className="d-flex justify-content-start detail-vote">
              <Icon.ArrowUpSquare size="20" className="up-vote" />
              <div className="mx-2">{formatNumber(detailState.upVote_count)}</div>
              <Icon.ArrowDownSquare size="20" className="down-vote" />
            </div>
            <div className="post-header-detail mx-2">
              <div className="post-title-detail-header">
                <span>{detailState.title}</span>
              </div>
              <div className="post-tag-detail">
                <span>{convertTag(detailState.tag)}</span>
              </div>
            </div>
          </div>
          <div className="detail-close" onClick={handleBack}>
            <Icon.X size="22" />
            <span>Close</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Grid container spacing={3}>
            <Grid item md={8}>
              <Card className="px-1 p-2 post-card-detail">
                <div className="d-flex">
                  <div className="up-down-vote">
                    <Icon.ArrowUpSquare size="20" className="up-vote" />
                    <div className="my-2">{formatNumber(detailState.upVote_count)}</div>
                    <Icon.ArrowDownSquare size="20" className="down-vote" />
                  </div>
                  <div className="flex-grow-1">
                    <div className="post-header">
                      <img src={avaGroup} className="post-ava-group mx-1" />
                      <span className="mx-1 group-name">r/DotA2</span>
                      <span className="mx-1">Posted by</span>
                      {"-"}
                      <img src={detailState.avatar_poster} className="post-ava mx-1" />
                      <span className="post-user-link mx-1">{detailState.posted_by}</span>
                      <span className="post-time mx-1">{`${timeSince(new Date(detailState.created_at))} ago`}</span>
                    </div>
                    <div className="post-body mx-1 mt-3">
                      <div className="post-title-detail">
                        <span>{detailState.title}</span>
                      </div>
                      <div className="post-tag d-block mt-1">
                        <span>{convertTag(detailState.tag)}</span>
                      </div>
                      <div className="post-content mt-2">
                        <div className="post-text">
                          {detailState.content}
                        </div>
                      </div>
                      <div className="post-foot mt-3">
                        <div className="d-flex justify-content-start">
                          <div className="post-comment comment">
                            <Icon.ChatLeft size="20" />
                            <span className="mx-2">{detailState.comment_count}</span>
                          </div>
                          <div className="post-comment">
                            <Icon.Share size="20" />
                            <span className="mx-2">Share</span>
                          </div>
                          <div className="post-comment">
                            <Icon.Save size="20" />
                            <span className="mx-2">Save</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostDetail;