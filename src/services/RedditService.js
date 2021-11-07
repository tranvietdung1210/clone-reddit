import axios from "axios";
class RedditService {
  getListPost(topic, page, limit){
    return axios.get(`http://localhost:3000/posts?topic=${topic}&_page=${page}&_limit=${limit}`);
  }
  getPostDetails(id){
    return axios.get(`http://localhost:3000/posts/${id}`);
  }
}

export default new RedditService();