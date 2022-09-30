import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill className="editor" theme='snow' value={value} onChange={setValue} />
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
          <input style={{ display: "none" }} type='file' id='updateImage' />
          <label className="file" htmlFor='updateImage'>Upload Image</label>
          <div className='buttons'>
            <button>Save the draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='items'>
          <h1>Category</h1>
          <div className="cat">
            <input type='radio' name='cat' value='NodeJS' id='node-js' />
            <label htmlFor='node-js'>NodeJS</label>
          </div>
          <div className="cat">
            <input type='radio' name='cat' value='ReactJS' id='react-js' />
            <label htmlFor='react-js'>ReactJS</label>
          </div>
          <div className="cat">
            <input type='radio' name='cat' value='ExpressJS' id='express-js' />
            <label htmlFor='express-js'>ExpressJS</label>
          </div>

          <div className="cat">
            <input type='radio' name='cat' value='HTML' id='html' />
            <label htmlFor='html'>HTML</label>
          </div>
          <div className="cat">
            <input type='radio' name='cat' value='CSS' id='css' />
            <label htmlFor='css'>CSS</label>
          </div>
          <div className="cat">
            <input type='radio' name='cat' value='SEO' id='seo' />
            <label htmlFor='seo'>SEO</label>
          </div>
          <div className="cat">
            <input type='radio' name='cat' value='Design' id='design' />
            <label htmlFor='design'>Design</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
