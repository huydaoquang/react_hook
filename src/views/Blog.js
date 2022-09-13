import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data: dataBlogs, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    false
  );
  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 21);
      setNewData(data);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };
  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew}></AddNewBlog>
        </Modal.Body>
      </Modal>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title} &nbsp; &nbsp;</span>
                  <span
                    onClick={() => deletePost(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </span>
                </div>
                <div className="content"> {item.body}</div>
                <button>
                  <Link to={`/Blogs/${item.id}`}>View detail</Link>
                </button>
              </div>
            );
          })}
        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading data
          </div>
        )}
      </div>
    </>
  );
};
export default Blog;
