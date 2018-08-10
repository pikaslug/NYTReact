import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return <div className="Search border border-dark mt-4 rounded">
        <header className="Search-header bg-dark text-light">
          <h1 className="Search-title">Search</h1>
        </header>
        <section className="Search-form container ">
          <div className="row">
            <form className="col-8 mx-auto mt-4 mb-4">
              <div class="form-group">
                <label for="exampleInputEmail1">Topic</label>
                <input type="" class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Topic" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Start Year</label>
                <input type="" class="form-control text-center" id="exampleInputPassword1" placeholder="Start Year" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">End Year</label>
                <input type="" class="form-control text-center" id="exampleInputPassword1" placeholder="End Year" />
              </div>

              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </section>
      </div>;
  }
}

export default Search;
