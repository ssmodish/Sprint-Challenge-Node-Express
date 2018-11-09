import React from 'react';

import axios from 'axios';

const url = 'http://localhost:9000';



class ProjectList extends React.Component {
  constructor(){
    super();
    this.state = {
      projects: [],
    }
  }

  getProjects(){
    axios.get(`${url}/projects`)
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getProjects();
  }

  render(){
    return (
      <div className='projects'>
        {this.state.projects.map(project => (
          <div className='project'>
            <p className="project-id">Project id: {project.id}</p>
            <p className="project-name">Project name: {project.name}</p>
            <p className="project-description">Project description: {project.description}</p>
            <p className="project-completed">Project complete: {project.completed}</p>
          </div>
        ))}
      </div>
    )
  }

}

export default ProjectList;