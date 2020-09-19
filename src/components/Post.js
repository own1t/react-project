// React
import React, { useState } from "react";

// Material-ui
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// Firebase
import { dbService, storageService } from "../firebase";

// CSS
import "./Post.css";

function Post({ postObj, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [editPost, setEditPost] = useState(postObj.text);

  const handleDelete = async () => {
    const confirm = window.confirm("Delete Post?");

    if (confirm) {
      await dbService.doc(`posts/${postObj.id}`).delete();
      await storageService.refFromURL(postObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dbService.doc(`posts/${postObj.id}`).update({
      text: editPost,
    });
    setEditing(false);
  };

  return (
    <>
      <div className="post">
        {editing ? (
          <>
            <form className="post__form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={editPost}
                onChange={(e) => setEditPost(e.target.value)}
                placeholder="Edit your post"
              />
              <Button type="submit">Update Post</Button>
            </form>
            <Button className="post__cancelButton" onClick={toggleEditing}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <div className="post__header">
              <span className="post__creator">@{postObj.creator}</span>
              {isOwner && (
                <>
                  <div className="post__actions">
                    <EditIcon
                      className="post__editIcon"
                      onClick={toggleEditing}
                      style={{ marginRight: "7px" }}
                    />

                    <DeleteIcon
                      className="post__deleteIcon"
                      onClick={handleDelete}
                    />
                  </div>
                </>
              )}
            </div>
            <p className="post__content">{postObj.text}</p>
            {postObj.attachmentUrl && (
              <img src={postObj.attachmentUrl} alt="" />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Post;
