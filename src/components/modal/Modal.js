import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

class Modal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="pop-modal" aria-hidden="false" aria-labelledby={this.props.labelBy} role="dialog">
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.onClose} className="btn btn-primary">
              <span className="fa fa-times"></span>
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.number,
  children: PropTypes.node
};

export default Modal;