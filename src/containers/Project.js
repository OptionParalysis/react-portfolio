import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import { fetchProject } from "../actions/index";
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Modal from '../components/modal/Modal';

import "./project.css";

class Project extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProject(id);
  }

  constructor(props) {
    super(props);
    this.state = { 
      currentModal: null,
      selectedImg: '' 
    };
  }

  openModal = (project) => {
    this.setState({
      currentModal: project.id,
      selectedImg: project.sizes.original
    });
  }

  closeModal = (project) => {
    this.setState({
      currentModal: project.id,
      selectedImg: ''
    });
  }

  renderImg() {
    return _.map(this.props.project.modules, (project) => {
      let image;
      if (project.type === "image") {
        image = (
          <picture key={project.id}>
            <img 
              alt={project.name} 
              srcSet={project.sizes.original} 
              onClick={this.openModal.bind(this, project)}
              className="image" 
            />
          </picture>
        );
      }
      return image;
    });
  }

  renderContent() {
    return _.map(this.props.project.modules, (project) => {
      let desc;
      if (project.type === 'text') {
        desc = <div key={project.id} dangerouslySetInnerHTML={createMarkup()} />;
      }
      function createMarkup() {
        return { __html: project.text };
      }
      return desc;
    });
  }

  render() {
    
    const data = this.props;
    const { project } = data;

    if (!project) {
      return <Loading />;
    }

    return (
      <div className="left-column-wrap project">
        <div className="left-column">
          <div className="image-wrap">
            {this.renderImg()}
            <Modal 
              show={this.state.currentModal}
              onClose={this.closeModal}>
              <picture>
                <img 
                  alt={project.name} 
                  srcSet={this.state.selectedImg}
                />
              </picture>
            </Modal>
          </div>
        </div>
        <div className="right-column">
          <article className="content-wrap">
            <h1>{project.name}</h1>
            {this.renderContent()}
            <br/>
            <Link to="/work" className="btn btn-primary">Previous Page</Link>
          </article>
        </div>
      </div>
    );

  }
}

function mapStateToProps({ projects }, ownProps) {
  return { project: projects[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchProject })(Project);