import React from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Table = ({ model, setModel, onEdit }) => {
  const onDelete = (index) => {
    setModel([...model.filter((item, i) => i !== index)]);
  };
  return (
    <div className="mt-5">
      <h2>Total Records : {model.length} </h2>
      {!!model.length ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {model.map(({ Subject, Category, Price }, index) => (
              <tr key={index}>
                <td key={Subject}>{Subject}</td>
                <td key={Category}>{Category}</td>
                <td key={Price}>{Price}</td>
                <td>
                  <input
                    type="button"
                    className="p-2 m-1 btn btn-warning"
                    onClick={() => onEdit(index)}
                    value="Update it"
                  />

                  <input
                    type="button"
                    className="p-2 m-1 btn btn-danger"
                    onClick={() => onDelete(index)}
                    value="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No records found </h2>
      )}
    </div>
  );
};

export default Table;
