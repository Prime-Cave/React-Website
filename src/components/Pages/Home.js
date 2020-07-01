import React from 'react';
import Header from '../Common/Header'
import image from '../assets/Image/clock.jpeg';
import Project from '../Common/Project';

//Re-useable components
import Services from '../Common/Services';
import Clients from '../Common/clients'
import Team from '../Common/Team';
import Portfolio from '../Common/Portfolio';


class Home extends React.Component{
    render(){
        return (
          <div>
            <Header
              title="Welcome!"
              subtitle="Glad to have you!"
              buttonText="Find out more"
              Link="/services"
              showButton={true}
              showtitle={true}
              showsubtitle={true}
              Image={image}
            />
            <Services />
            <Portfolio />
            <Team />
           <Clients /> 
           <Project />
          </div>
        );
    }
}
export default Home;