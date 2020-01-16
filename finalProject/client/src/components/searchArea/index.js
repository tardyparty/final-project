import React from "react";

const SearchArea = (props) => {
    return(
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
    )
}

export default SearchArea;