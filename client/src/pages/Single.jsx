import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import moment from "moment";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

import { AuthContext } from "../context/authContext";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className='single-page'>
      <div className='content'>
        <img src={`../upload/${post.img}`} alt='single page' srcset='' />
        <div className='user'>
          {post.userImage && <img src={post.userImage} alt='user' srcSet='' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt='edit' srcSet='' />
              </Link>
              <img onClick={handleDelete} src={Delete} alt='delete' srcSet='' />
            </div>
          )}
        </div>
        <h1>{post.title} </h1>
        {getText(post.desci)}
      </div>
      <div className='menu'>
        <Menu cat={post.cat} />
      </div>
    </div>
  );
};

export default Single;
