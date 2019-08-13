import * as React from "react";
import ReactModal from "react-modal";
import { StyledModImage } from "../Styled";
import "./styles.css";

ReactModal.setAppElement("#main");
class ImageModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.props.closeModal();
    this.setState({ showModal: false });
  };

  render() {
    return (
      <ReactModal
        classsName="react-modal"
        overlayClassName="react-modal-overlay"
        isOpen={
          this.props.showModal ? this.props.showModal : this.state.showModal
        }
        onRequestClose={this.handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <button className="modal-close" onClick={this.handleCloseModal}>
          X
        </button>
        <StyledModImage url={this.props.selectedPhoto} />
      </ReactModal>
    );
  }
}
export default ImageModal;
