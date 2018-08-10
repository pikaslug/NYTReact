import React, { Component } from "react";
import "./Results.css";

class Results extends Component {

  getAllResults() {
    // take in Result and make the magic happen (make this update from Mongo Collection)
    
  }

  render() {
    return <div className="Results border border-dark mt-4 rounded">
        <header className="Results-header bg-dark text-light">
          <h1 className="Results-title">Results</h1>
        </header>
        <section className="Results-form container ">
          {/* A Result */}
          
          {/* A Result */}
          <div className="Result row mx-2 mt-2 mb-4 p-2 border border-dark rounded">
            <div className="col-10 text-left align-middle">
              Obama Gives Commenncement
            </div>
            <div className="col-2">
              <button type="button" class="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </section>
      </div>;
  }
}

export default Results;
