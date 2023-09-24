import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-black ">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">KR TOURS & TRAVELS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link menuBar active text-white" aria-current="page" to="/dashboard/:id  ">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link menuBar text-white" to="/rental">Rental Type</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link menuBar text-white" to="#">Driver Cash Book</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link menuBar text-white" aria-disabled="true" to="#">Vehicle Track</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}