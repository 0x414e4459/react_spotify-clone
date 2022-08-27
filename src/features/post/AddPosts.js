import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addPosts } from "./postSlice";

function AddPosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const titleChanged = (e) => setTitle(e.target.value);
  const contentChanged = (e) => setContent(e.target.value);
  const onSavePost = () => {
    if (title && content) {
      dispatch(
        addPosts({
          id: nanoid(15),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
      console.log(title, content);
    }
  };
  return (
    <div>
      AddPosts
      <form>
        <label htmlFor="postTitle">Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={titleChanged}
        />
        <label htmlFor="postContent">Content: </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={contentChanged}
        />
        <button type="button" onClick={onSavePost}>
          save post
        </button>
      </form>
    </div>
  );
}

export default AddPosts;
