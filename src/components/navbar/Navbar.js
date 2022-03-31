import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {" "}
          <i class="bi bi-telephone"></i> PhoneBook
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-primary ml-auto">
            {" "}
            <i class="bi bi-plus-lg"></i>Create Contact{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
