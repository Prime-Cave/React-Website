import React from 'react';
import ProjectItem from './ProjectItem'

import img1 from '../assets/Image/portfolio/01-full.jpg';
import img2 from '../assets/Image/portfolio/02-full.jpg';
import img3 from '../assets/Image/portfolio/03-full.jpg';
import img4 from '../assets/Image/portfolio/04-full.jpg';
import img5 from '../assets/Image/portfolio/05-full.jpg';
import img6 from '../assets/Image/portfolio/06-full.jpg';

const Projects = [
  {
    Id: "portfolioModal1",
    image: img1,
    projectName: "Threads",
    ProjectSubtitle: "Lorem ipsum dolor sit amet consectetur.",
    ProjectDetails:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    Id: "portfolioModal2",
    image: img2,
    projectName: "Explore",
    ProjectSubtitle: "Lorem ipsum dolor sit amet consectetur.",
    ProjectDetails:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    Id: "portfolioModal3",
    image: img3,
    projectName: "Finish",
    ProjectSubtitle: "Lorem ipsum dolor sit amet consectetur.",
    ProjectDetails:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    Id: "portfolioModal4",
    image: img4,
    projectName: "Lines",
    ProjectSubtitle: "Lorem ipsum dolor sit amet consectetur.",
    ProjectDetails:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    Id: "portfolioModal5",
    image: img5,
    projectName: "Southwest",
    ProjectSubtitle: "Lorem ipsum dolor sit amet consectetur.",
    ProjectDetails:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
  {
    Id: "portfolioModal6",
    image: img6,
    ProjectName: "Window",
    ProjectSubtitle: "Lorem ipsum dolor sit amet consectetur.",
    ProjectDetails:
      "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
  },
];

class Project extends React.Component{

    render(){
        return(
            <div>
               {
                    Projects.map((Projects,index) =>{
                        return <ProjectItem {...Projects} key={index}/>                    
                })
               }
            </div>

        )
    }
}

export default Project;
