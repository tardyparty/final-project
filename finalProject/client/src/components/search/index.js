import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import { func } from "prop-types";

function Search(props) {
  return(
    // <Form>
    //   <Form.Group controlId="formBasicSearch">
    //     <Form.Control type="text" placeholder="Search for books..." />
    //   </Form.Group>
    //   <Button variant="dark" type="submit">
    //     Search
    //   </Button>
    // </Form>
    <div className="search-area">
        <form action="">
            <input onChange={props.handleSearch} type="text"/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search;