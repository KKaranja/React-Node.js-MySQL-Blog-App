import axios from "axios";
import moment from "moment";
import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desci || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/upload", formData);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desci: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desci: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(value);

  return (
    <div className='add'>
      <div className='content'>
        <input
          type='text'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='items'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type='file'
            id='updateImage'
            name=''
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className='file' htmlFor='updateImage'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save the draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className='items'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              checked={cat === "Nodejs"}
              name='cat'
              value='Nodejs'
              id='node-js'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='node-js'>NodeJS</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              checked={cat === "Reactjs"}
              name='cat'
              value='Reactjs'
              id='react-js'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='react-js'>ReactJS</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              checked={cat === "Expressjs"}
              name='cat'
              value='Expressjs'
              id='express-js'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='express-js'>ExpressJS</label>
          </div>

          <div className='cat'>
            <input
              type='radio'
              checked={cat === "html"}
              name='cat'
              value='html'
              id='html'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='html'>HTML</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              checked={cat === "css"}
              name='cat'
              value='css'
              id='css'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='css'>CSS</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              checked={cat === "seo"}
              name='cat'
              value='seo'
              id='seo'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='seo'>SEO</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              checked={cat === "Design"}
              name='cat'
              value='Design'
              id='design'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='design'>Design</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
