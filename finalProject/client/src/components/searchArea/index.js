import React from "react";
import './style.css';

const SearchArea = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <img className="camp_search-image" src="/images/CG_search.jpeg"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12"></div>
                
                <form>
                    <div className="form-group">
                        <label className="search-area"><h3> Search by State</h3></label>
                        <br></br>
                        <input className="col-12 form-control"
                            value={props.searchField}
                            type="text"
                            name="searchCampsite"
                            placeholder="Enter State Abbrev"
                            onChange={props.handleSearch}
                        />
                    </div>
                    <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchArea;