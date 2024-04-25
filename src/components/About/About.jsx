import './about.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Embark on a transforming educational journey with our university comprehensive education programs. Our cutting-edge curriculum is desingned to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
        <p>
            With a focus on innovation, hands-on learning and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, school and communities.
        </p>
        <p>
            Whether you aspire to become a teacher, administrator, counselor or educational leader. Our diverse range of programs offers the perfect pathway ro achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  )
}

export default About
