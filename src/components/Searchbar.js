import React, { useEffect, useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState([]);
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-2 text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success text-white"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
