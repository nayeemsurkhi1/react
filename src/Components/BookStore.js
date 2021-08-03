import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import "../Css/BookStore.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BookStore = () => {
  const [model, setModel] = useState([]);

  useEffect(() => {
    fetch("https://jsonblob.com/api/3fbb3ed1-ed4e-11eb-aa06-bffe3417e070")
      .then((response) => response.json())
      .then((json) => setModel(json));
  }, []);
  const onEdit = (index) => {
    const obj = {
      ...model[index],
    };
    //console.log(obj);
    setForm({ ...form, ...obj });
  };
  const [form, setForm] = useState({
    Subject: "",
    Category: "",
    Price: "$",
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="mt-5">Add New Records</h2>
            <Form
              model={model}
              setModel={setModel}
              form={form}
              setForm={setForm}
            />
          </div>
          <div className="col-md-8">
            <Table model={model} setModel={setModel} onEdit={onEdit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
