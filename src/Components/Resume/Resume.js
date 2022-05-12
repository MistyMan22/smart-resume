import react, {useState} from 'react';
import willresume from '../../data';
import SkillOfPerson from '../SkillOfPerson/SkillOfPerson';
import "./Resume.css";

export default function Resume(props) {

  function logResume() {
    console.log("Something");
    console.log(willresume)
  }
  return (
    <div onClick={logResume} id="resume-main">
      <div className="resume-section" id="name-section">
        <h3>{willresume.person.name}</h3>
        <p>{willresume.person.phone}</p>
        <p>{willresume.person.email}</p>
      </div>
      <div className="resume-section" id="image-placeholder"/>
      <div className="resume-section" id="skills-section">
        <h3>Skills</h3>
        {willresume.skills.map(item => <div className="skill-tile">{item.skill.name}</div>)}
      </div>
      <div className="resume-section" id="projects-section">
        <h3>Projects</h3>
        {willresume.projects.map(pp => (
          <div className='project-display'>
            <h4>{pp.project.name}</h4>
            <p>{pp.project.description}</p>
          </div>
        ))}
      </div>
      <div className="resume-section" id="employment-section">
        <h3>Employment</h3>
        {willresume.employers.map(employer => (
          <div className="employer-display">
            <h4>{employer.employer.name}</h4>
            <p>{employer.jobTitle}</p>
            <p>{employer.startDate} - {employer.endDate}</p>
          </div>
        ))}
      </div>
      <div className="resume-section" id="certification-section">
        <h3>Certification</h3>
        {willresume.certifications.map(cert => (
          <div>
            <span>{cert.certification.grantingInstitution} - </span>
            <span>{cert.certification.name}</span>
            <span>({cert.status})</span>
          </div>
        ))}
      </div>
      <SkillOfPerson skillToPerson={willresume.skills[0]}/>
    </div>
  )
}