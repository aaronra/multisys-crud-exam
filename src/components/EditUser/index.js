import React from "react";

export const EditUser = () => {
  return (
    <section>
      <h2>AddUser</h2>
      <form>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
