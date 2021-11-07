import { Card, } from "@material-ui/core";
import * as Icon from 'react-bootstrap-icons';
import { convertTag, formatNumber, timeSince } from "../../../helper/utilities";

function PostCard(props) {
  const { openModalPost, data } = props
  const postAva = data.avatar_poster;
  const time = new Date(data.created_at);

  return (
    <Card className="px-1 p-2 mt-3 post-card" onClick={openModalPost}>
      <div className="d-flex">
        <div className="up-down-vote">
          <Icon.ArrowUpSquare size="20" className="up-vote" />
          <div className="my-2">{formatNumber(data.upVote_count)}</div>
          <Icon.ArrowDownSquare size="20" className="down-vote" />
        </div>
        <div className="flex-grow-1">
          <div className="post-header">
            <span className="mx-1">Posted by</span>
            <img src={postAva} className="post-ava mx-1" />
            <span className="post-user-link mx-1">{data.posted_by}</span>
            <span className="post-time mx-1">{`${timeSince(time)} ago`}</span>
          </div>
          <div className="post-body mx-1 mt-3">
            <div className="post-title">
              <span>{data.title}</span>
            </div>
            <div className="post-tag">
              <span>{convertTag(data.tag)}</span>
            </div>
            <div className="post-content mt-2">
              <div className="post-text">
                {data.content}
              </div>
            </div>
            <div className="post-foot">
              <div className="d-flex justify-content-start">
                <div className="post-comment comment">
                  <Icon.ChatLeft size="20" />
                  <span className="mx-2">{formatNumber(data.comment_count)} Comments</span>
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
  );
}

export default PostCard;