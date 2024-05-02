import "./about.css"
import AboutImage from '../../assets/p3.jpg'
import CV from '../../assets/HELEN_ALABI_CV.pdf'
import { MdOutlineFileDownload } from "react-icons/md";
// import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
// import { TbBrandTypescript } from "react-icons/tb";
// import { FaNodeJs } from "react-icons/fa";
import Card from '../../components/Card'

const data =[
      {id:1, icon: <IoLogoHtml5 /> , title: 'HTML'},
      {id:2, icon: <IoLogoCss3 /> , title: 'CSS'},
      {id:3, icon: <DiJavascript /> , title: 'JavaScript'},
      // {id:4, icon: <TbBrandTypescript /> , title: 'TypeScript'},
      // {id:5, icon: <FaReact /> , title: 'React'},
      // {id:6, icon: <FaNodeJs /> , title: 'Node.js'}

]



const About = () => {
  return (
    <section id="about">
      <div className= "container aboutContainer">
        <div className= "aboutLeft">
          <div className= "aboutImage">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className= "aboutRight">
          <h2>About Me</h2>
          <div className= "aboutCards">
            {
              data.map(item =>(<Card key={item.id} className= 'aboutCard'>
                <span className= "aboutIcon"> {item.icon}</span>
                <h5>{item.title}</h5>
              </Card>))
            }

          </div>
          <p> I am Helen a passionate Software Engineer based in Lagos. I thrive on exploring new and innovative ways to create exceptional user experiences. With dedication and hard work, I have built a portfolio that showcases my skills and expertise. Feel free to explore my work and see how I can help bring your web dreams to life. Let's collaborate and make something amazing together! Check out my resume below!
          </p>
          <a href={CV} download  className= "btn primary">Download CV <MdOutlineFileDownload /> </a>

        </div>
      </div>
    </section>
  )
}

export default About;