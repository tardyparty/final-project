import React from 'react';
import './style.css';

class Footer extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="footer navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-bottom" id="footer">
                        <div className="collapse navbar-collapse" id="footer-collapse">
                            <a className="footer-text" href="/home">&copy;Copyright 2020 Campers</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;