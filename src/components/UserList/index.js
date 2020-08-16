import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const UserList = () => {
  const { users, removeUser, editUser } = useContext(GlobalContext);
  const selectedUserInitialState = {
    id: "",
    name: "",
  };
  const [selectedUser, setSelectedUser] = useState(selectedUserInitialState);

  const handleOnEditUser = (e) => {
    setSelectedUser({ ...selectedUser, name: e.target.value });
  };

  const handleUpdateUser = (e) => {
    if (e.key === "Enter") {
      editUser(selectedUser);
      setSelectedUser(selectedUserInitialState);
      alert("updated");
    }
  };

  const mapUserList = users.map((user) => {
    return (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>
          {selectedUser.id === user.id ? (
            <input
              type="text"
              className="form-control"
              onChange={handleOnEditUser}
              onKeyPress={handleUpdateUser}
              value={selectedUser.name}
            />
          ) : (
            user.name
          )}
        </td>
        <td className="text-right">
          <button
            className="btn btn-primary"
            onClick={() => setSelectedUser(user)}
          >
            Update
          </button>{" "}
          <button
            className="btn btn-danger"
            onClick={() => removeUser(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <section className="mt-5">
      <h2>UserList</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col" className="text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{users.length > 0 ? mapUserList : "No user List"}</tbody>
      </table>
    </section>
  );
};
