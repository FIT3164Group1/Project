import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className="p-4">
        <div className="p-4 space-x-4 bg-white shadow-lg max-w-screen-2xl carousel carousel-center rounded-box">
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/500/256/144"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/501/256/144"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/502/256/144"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/503/256/144"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/504/256/144"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/505/256/144"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/506/256/144"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
