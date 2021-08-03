import React from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
const CommentsTable = ({ comments, setComments, onEdit }) => {
  const onDelete = (index) => {
    setComments([...comments.filter((item, i) => i !== index)]);
  };

  return (
    <>
      <div className="records">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">PostId</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Body</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.map(({ postId, id, name, email, body }, index) => (
              <tr key={index}>
                <td key={postId}>{postId}</td>
                <td key={id}>{id}</td>
                <td key={name}>{name}</td>
                <td key={email}>{email}</td>
                <td key={body}>{body}</td>
                <td>

                  {/* <input
                    type="button"
                    className="p-2 m-1 btn btn-warning"
                   
                    value="Update"
                  /> */}
                  {/* <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                  <Button variant="contained" color="primary"  onClick={() => onEdit(index)}>
     Update
    </Button>
    <Button variant="contained" color="secondary"  onClick={() => onDelete(index)}>
    Delete
    </Button>
</ButtonGroup>
  */}
   <Fab color="primary" aria-label="add"onClick={() => onEdit(index)}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit"onClick={() => onDelete(index)}>
        <EditIcon />
      </Fab>
                  {/* <input
                    type="button"
                    className="p-2 m-1 btn btn-danger"
                    onClick={() => onDelete(index)}
                    value="Delete"
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommentsTable;
