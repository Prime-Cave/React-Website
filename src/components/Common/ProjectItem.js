import React from "react";

class ProjectModal extends React.Component {
  render() {
    return (
      <div
        className="portfolio-modal modal fade"
        id={this.props.Id}
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">{this.props.projectName}</h2>
                    <p className="item-intro text-muted">
                      {this.props.ProjectSubtitle}
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={this.props.image}
                      alt=""
                    />
                    <p>
                        {this.props.ProjectDetails}
                    </p>
                    <ul className="list-inline">
                      <li>Date: January 2020</li>
                      <li>Client: Threads</li>
                      <li>Category: Illustration</li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
