import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  //fetch posts from global redux store or state
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      {/* <Post /> */}
    </>
  );
};

export default Posts;
