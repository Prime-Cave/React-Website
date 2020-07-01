import React from "react";
import Teamitem from "./Teamitem";

import Image1 from "../assets/Image/team/1.jpg";
import Image2 from "../assets/Image/team/2.jpg";
import Image3 from "../assets/Image/team/3.jpg";

const TeamMember = [
  { name: "Kay Garland", title: "Lead Designer", image: Image1 },
  { name: "Larry Parker", title: "Lead Marketer", image: Image2 },
  { name: "Kay Garland", title: "Diana Petersen", image: Image3 },
];

class Team extends React.Component {
  render() {
    return (
      <section className="page-section bg-dark" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-info text-uppercase">
              Our Amazing Team
            </h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {TeamMember.map((item, index) => {
              return <Teamitem {...item} key={index} />;
            })}
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
