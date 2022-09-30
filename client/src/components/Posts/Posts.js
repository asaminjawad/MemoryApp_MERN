import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";

function posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default posts;
