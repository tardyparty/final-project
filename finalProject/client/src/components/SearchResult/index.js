import React from "react";
// import { Col, Row } from "react-bootstrap";
import { Row, Col } from "../Grid"

const SearchResult = (props) => {
    return (props.campsites.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3> Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        <ul>
                            {console.log(props.campsites)}
                            
                            {props.campsites.map(campsite => {
                                return (
                                    <li className="search-list list-group-item">
                                        <Row className="SearchResult row" 
                                        id={campsite.name + "Card"} 
                                        key={campsite._id}>
                                            <Col size="1" className="emptyCol" />
                                            {/* col-9 show information of the book */}
                                            <Col size="9" className="campInfo">
                                                <Row>
                                                    <h3 className="campName">{campsite.name}</h3>
                                                </Row>
                                                <Row>
                                                    <h4 className="campDescription">{campsite.description}</h4>
                                                </Row>
                                                <Row>
                                                    <p className="campAmmenities">{campsite.ammenities}</p>
                                                </Row>
                                                <Row>
                                                    <p className="campAccessibility">{campsite.accessibility.cellphoneinfo}</p>
                                                </Row>
                                                <Row>
                                                    <p className="campDirections">{campsite.directions}</p>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default SearchResult;