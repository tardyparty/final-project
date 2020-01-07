import React from 'react';
import Slide from 'react-reveal/Slide';
import '../carousel/style.css';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <Slide>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="carousel slide" id="carousel-371278">
                  <ol className="carousel-indicators">
                    <li data-slide-to="0" data-target="#carousel-371278" class="active">
                    </li>
                    <li data-slide-to="1" data-target="#carousel-371278">
                    </li>
                    <li data-slide-to="2" data-target="#carousel-371278">
                    </li>
                    <li data-slide-to="3" data-target="#carousel-371278">
                    </li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" alt="Carousel Bootstrap First" src="/images/HP_carousel_1.jpeg" />
                      <div className="carousel-caption">
                        <h4>
                          First Thumbnail label
							                                      </h4>
                        <p>
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                                      </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="Carousel Bootstrap Second" src="/images/HP_carousel_2.jpeg" />
                      <div className="carousel-caption">
                        <h4>
                          Second Thumbnail label
							                                      </h4>
                        <p>
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                                      </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="Carousel Bootstrap Third" src="/images/HP_carousel_3.jpeg" />
                      <div className="carousel-caption">
                        <h4>
                          Third Thumbnail label
							                                      </h4>
                        <p>
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                                      </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" alt="Carousel Bootstrap Third" src="/images/HP_carousel_4.jpeg" />
                      <div className="carousel-caption">
                        <h4>
                          Third Thumbnail label
							                                      </h4>
                        <p>
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                                      </p>
                      </div>
                    </div>
                  </div> <a className="carousel-control-prev" href="#carousel-371278" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" href="#carousel-371278" data-slide="next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Carousel;