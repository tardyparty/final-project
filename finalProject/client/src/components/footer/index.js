import React from 'react';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-bottom" id="footer">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">Campers Inc.
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;