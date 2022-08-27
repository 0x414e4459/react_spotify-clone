import React from "react";
import { useSelector } from "react-redux";
import { allPosts } from "./postSlice";

function PostList() {
  const posts = useSelector(allPosts);
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h6>{post.id}</h6>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts}
    </section>
  );
}

export default PostList;
