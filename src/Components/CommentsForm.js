import React from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

const CommentsForm = ({ cform, setCform, comments, setComments }) => {
  const { postId, id, name, email, body } = cform;

  const inputHandler = ({ target: { value, name } }) => {
    setCform({
      ...cform,
      [name]: value,
    });
  };

  //getting last id of comments and set to id field

  const addNewComment = (e) => {
    e.preventDefault();
    if (!name || !email || !body) {
      alert("All fields are Mandatery");
    } else {
      console.log(cform);
      setComments([...comments, cform]);
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !body) {
      alert("All fields are Mandatery");
    } else {
      console.log(cform);
      setComments([...comments, cform]);
    }
  };

  return (
    <div>
      <form className="inputForm">
        
        <div className="mb-3">
          <label>Post ID</label>
          <input
            type="number"
            className="form-control"
            id="postId"
            value={postId}
            name="postId"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div className="mb-3">
          <label>Id</label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={id}
            name="id"
            disabled
            onChange={(e) => inputHandler(e)}
          />
        </div>
     

        <div className="mb-3">
          
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            name="name"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            name="email"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <div className="mb-3">
          <label>Body</label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            value={body}
            name="body"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div className="mb-3">
          {/* <input
            type="button"
            className="btn btn-warning update"
            id="add"
            value="Update"
            onClick={updateHandler}
          /> */}

          {/* <input
            type="button"
            className="btn btn-success"
            id="add"
            value="Add New"
            onClick={addNewComment}
          /> */}
           <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                  <Button variant="contained" color="primary"  onClick={updateHandler}>
     Modify
    </Button>
    <Button variant="contained" color="secondary"  onClick={addNewComment}>
    Add New
    </Button>
</ButtonGroup>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
