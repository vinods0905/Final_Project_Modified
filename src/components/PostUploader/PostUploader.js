import React, { useState } from "react";
import "./PostUploader.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Article, EventNote, Image, VideoFile } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { addDoc, collection } from "firebase/firestore";
//import { green, lightGreen, orange, pink } from "@mui/material/colors";
//import { blue, grey, lightBlue } from "@mui/material/colors";
import { db, timestamp, storage } from "../../firebase";

const PostUploader = () => {
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    const storageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        //this is the place where we get actual image
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await addDoc(collection(db, "posts"), {
            message: input,
            timestamp: timestamp,
            profilePic: user.photoURL,
            username: user.displayName,
            image: downloadURL,
          });
          setProgress(0);
          setInput("");
          setImage("");
        });
      }
    );
  };
  console.log(progress);
  return (
    <div className="postUploader">
      <div className="postUploader__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            placeholder={`start a post `}
            className="postUploader__input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
      <div className="postUploader__bottom">
        <div className="postUploader__option">
          <Image style={{ color: "#70b5f9" }} />
          <form>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit" onClick={handleSubmit}></button>
          </form>
          <h4 style={{ color: "grey" }}>Photo</h4>
        </div>

        <div className="postUploader__option">
          <VideoFile style={{ color: "green" }} />
          <h4 style={{ color: "grey" }}>Video</h4>
        </div>
        <div className="postUploader__option">
          <EventNote style={{ color: "orange" }} />
          <h4 style={{ color: "grey" }}>Event</h4>
        </div>
        <div className="postUploader__option">
          <Article style={{ color: "pink" }} />
          <h4 style={{ color: "grey" }}>Article</h4>
        </div>
      </div>
    </div>
  );
};

export default PostUploader;
