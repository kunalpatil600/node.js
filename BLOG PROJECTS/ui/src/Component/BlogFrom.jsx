import axios from 'axios';
import React, { useState } from 'react';

const BlogForm = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setcontent] = useState("");

  const handleTagsChange = (e) => {
    const inputTags = e.target.value.split(",");
    setTags(inputTags.map((tag) => tag.trim()).filter((tag) => tag !== ""));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { tags, title, content, author };
    
    axios.post(`http://localhost:8080/blog/create`,userdata)
      .then((res) => {
        console.log(res.data);
        settitle("");
        setcontent("");
        setauthor("");
        setTags([]); // Reset tags
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="col-6 m-auto mt-5">
        <form onSubmit={handlesubmit} className="container mt-4 p-4 shadow-sm rounded">
          <div className="mb-3">
            <input
              type="text"
              name="tags"
              value={tags.join(",")}
              placeholder="Tags (Add more with commas)"
              onChange={handleTagsChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={(e) => settitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="author"
              value={author}
              placeholder="Author"
              onChange={(e) => setauthor(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="content"
              value={content}
              placeholder="Content"
              onChange={(e) => setcontent(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
