import React, { useState, useEffect } from "react";
import CommentsTable from "./CommentsTable";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsForm from "./CommentsForm";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const onEdit = (index) => {
    const obj = {
      ...comments[index],
    };
    setCform({ ...cform, ...obj });
  };
  // const nextId = coments.map((index) => index);
  const [cform, setCform] = useState({
    id: "600",
    postId: "",
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);
  return (
    <>
      <div className="container">
        <CommentsForm
          cform={cform}
          setCform={setCform}
          comments={comments}
          setComments={setComments}
        />
        <CommentsTable
          comments={comments}
          setComments={setComments}
          onEdit={onEdit}
        />
      </div>
    </>
  );
};

export default Comments;
