import React, { useState, useEffect } from "react";
import PostUploader from "../PostUploader/PostUploader";
import { db } from "../../firebase";
import "./Feed.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import Post from "../Post/Post";

const Feed = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs);
      setposts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            //complete object is stored in the data field
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  return (
    <div className="feed">
      <PostUploader />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilepic={post.data.profilepic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
