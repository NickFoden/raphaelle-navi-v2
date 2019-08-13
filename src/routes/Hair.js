import React, { Component } from "react";
import ImageModal from "../components/Modal/ImageModal";
import Photos from "../assets/index";
import "./pages.css";

class Hair extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      selectedPhoto: "",
      showModal: false
    };
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };
  setPhoto = (e, photo) => {
    e.preventDefault();
    this.setState({
      selectedPhoto: photo,
      showModal: true
    });
  };
  render() {
    return (
      <div className="album_container">
        <ImageModal
          selectedPhoto={this.state.selectedPhoto}
          closeModal={this.closeModal}
          showModal={this.state.showModal}
        />
        <ul>
          {Object.values(Photos).map(item => (
            <li
              key={item.key}
              onClick={e => this.setPhoto(e, item.image2)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt={item.title}
                srcSet={(`${item.image} 1x`, `${item.image2} 2x`)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hair;
