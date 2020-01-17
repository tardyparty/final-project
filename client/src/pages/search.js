import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import SearchArea from "../components/searchArea";
import SearchResult from "../components/SearchResult";
import { Container, Form, Button } from "react-bootstrap";
import API from "../utils/API";


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
        campsites: [],
        searchField: ''
    }
}

handleFormSubmit = event => {
  event.preventDefault();
  // once it clicks it connects to the national park api with the search value
  API.getCampsite(this.state.searchField)
      .then(res => {
          if (res.data === "error") {
              throw new Error(res.data);
          }
          else {
              // store response in an array
              let results = res.data.data
              //map through the array 
              results = results.map(result => {
                  //store campsite info in a new object 
                  result = {
                      key: result.id,
                      name: result.name,
                      description: result.description,
                      directions: result.directionsUrl
                  }
                  console.log(result);
                  return result;
                  
              })
              // reset the sate of the empty campsite array to the new arrays of objects with properties geting back from the response
              this.setState({ campsites: results, error: "" })
          }
      })
      .catch(err => this.setState({ error: err.items }));
}

handleSearch = (e) => {
  console.log(e.target.value);
  this.setState({ searchField: e.target.value })
}

  render() {
    return (
      <Container>
        <Header />
        <Container>
              <SearchArea handleFormSubmit={this.handleFormSubmit} handleSearch={this.handleSearch} />
        </Container>
        <br></br>
        <Container>
          <SearchResult campsites={this.state.campsites} />
        </Container>
        <Footer>
        </Footer>
      </Container>
    )
  }
}

export default Search;