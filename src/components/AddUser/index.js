import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

import { GlobalContext } from "../../context/GlobalState";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    setName("");
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  return (
    <section>
      <h2>AddUser</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={name}
            onChange={handleOnChange}
            className="form-control"
            id="username"
            aria-describedby="username"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </section>
  );
};
