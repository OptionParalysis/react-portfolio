import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import isLoading from './IsLoading';

import "./projects.css";

class Projects extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }
  
  renderList() {
    return _.map(this.props.projects, project => {
      return (
        <li key={project.id} className="work-item">
          <article className="card">
            <picture>
              <source srcSet={project.covers['404']} media="(min-width: 320px)" />
              <source srcSet={project.covers['404']} media="(min-width: 480px)" />
              <source srcSet={project.covers['404']} media="(min-width: 1024px)" />
              <source srcSet={project.covers.original} media="(min-width: 1200px)" />
              <img srcSet={project.covers.original} alt={project.name} />
            </picture>
            <div className="mask">
              <h3 className="title">{project.name}</h3>
              <Link to={`/work/${project.id}`} role="button" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </article>
        </li>
      );
    });
  }

  render() {
    const { projects } = this.props;
    if (!projects) {
      return <Loading />;
    }

    return (
      <div>
        <ul className="work">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);
