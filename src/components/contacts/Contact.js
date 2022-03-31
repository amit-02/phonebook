import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();

  const { id, name, phone, email } = contact;
  return (
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </th>
      <td>
        {" "}
        <Avatar className="mr-3" name={name} size="45" round={true} /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <i className="bi bi-pencil-fill"></i>
        </Link>
        <span onClick={() => dispatch(deleteContact(id))}>
          <i className="bi bi-trash text-danger"></i>
        </span>
      </td>
    </tr>
  );
};

export default Contact;
