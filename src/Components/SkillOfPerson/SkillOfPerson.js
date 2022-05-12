import react from 'react';
import './SkillOfPerson.css';

export default function SkillOfPerson(props) {
  return (
    (typeof(props.skillToPerson) !== "undefined") && (
      <div>
      <h3>{props.skillToPerson.person.name} and {props.skillToPerson.skill.name}</h3>
      <p>{props.skillToPerson.person.name} is {props.skillToPerson.experienceLevel}</p>
      <h5>Where {props.skillToPerson.person.name} learned {props.skillToPerson.skill.name}:</h5>
      {props.skillToPerson.educationSource.map(source => <p>{source.name}</p>)}
    </div>
  ))
}