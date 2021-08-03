import React from "react";

const Form = ({ model, setModel, form, setForm }) => {
  const { Subject, Category, Price } = form;
  const inputHandler = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!Subject || !Category || !Price) {
      alert("All fields are Mandatery");
    } else {
      setModel([...model, { Subject, Category, Price }]);
      setForm({
        Subject: "",
        Category: "",
        Price: "$",
      });
    }
  };
  const addBookHandler = (e) => {
    e.preventDefault();
    if (!Subject || !Category || !Price) {
      alert("All fields are Mandatery");
    } else {
      setModel([...model, { Subject, Category, Price }]);
      setForm({
        Subject: "",
        Category: "",
        Price: "$",
      });
    }
  };

  return (
    <>
      {/* <pre>{JSON.stringify(model, null, 4)}</pre> */}
      {/* <pre>{JSON.stringify(form, null, 4)}</pre> */}
      <form className="inputForm">
        <div className="mb-3">
          <label>Subject</label>
          <input
            type="text"
            className="form-control"
            id="Subject"
            value={Subject}
            name="Subject"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div className="mb-3">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            id="Category"
            value={Category}
            name="Category"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            id="Price"
            value={Price}
            name="Price"
            onChange={(e) => inputHandler(e)}
          />
        </div>

        <div className="mb-3">
          <input
            type="button"
            className="btn btn-warning update"
            id="add"
            value="Update"
            onClick={updateHandler}
          />

          <input
            type="button"
            className="btn btn-success"
            id="add"
            value="Add New"
            onClick={addBookHandler}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
