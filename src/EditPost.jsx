import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Missing from "./Missing";
import DataContext from "./context/DataContext";

const EditPost = () => {
  const { id } = useParams();

  const { posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody } =
    useContext(DataContext);

  const post = posts.find((post) => {
    return post.id.toString() === id;
  });

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      <article className="post">
        {editTitle && (
          <>
            <h2>Edit Post</h2>
            <form
              className="newPostForm"
              onSubmit={(e) => {
                return e.preventDefault();
              }}
            >
              <label htmlFor="postTitle">Title : {""}</label>
              <input
                type="text"
                required
                id="postTitle"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <label htmlFor="postBody">Post : </label>
              <textarea
                id="postBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              />{" "}
              <button
                onClick={() => {
                  return handleEdit(post.id);
                }}
              >
                Update
              </button>
            </form>
          </>
        )}
        {!editTitle && <Missing />}
      </article>
    </main>
  );
};

export default EditPost;
