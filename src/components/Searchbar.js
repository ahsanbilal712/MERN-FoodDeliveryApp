import React from "react";

export default function Searchbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark"> 
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2 text-white" 
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-white" type="submit"> 
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
