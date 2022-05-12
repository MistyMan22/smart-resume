import react, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getPersonToSkill, getProjectSkillContributions } from '../../data';
import './SkillOfPerson.css';

export default function SkillOfPerson(props) {
  const [obj, setObj] = useState({});
  const [contributions, setContributions] = useState([])
  let params = useParams();

  useEffect(() => {
    populateObj();
  }, []);

  function populateObj() {
    let pts = getPersonToSkill(params.persontoskillid);
    
    if (pts === null  || typeof(pts) === "undefined")
      return;

    setObj(pts);
    let contribs = getProjectSkillContributions(pts.skill.name, pts.person.name);
    setContributions(contribs);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    (obj !== null && typeof(obj) !== "undefined" && !isEmpty(obj)) && (
      <div className="skill-of-person-view">
        <h3>{obj.person.name}'s history with {obj.skill.name}</h3>
        <p>{obj.person.name} is <em>{obj.experienceLevel}</em> in {obj.skill.name}</p>
        <h5>Education Sources:</h5>
        {obj.educationSource.map(source => <p>{source.name}</p>)}
        <h5>Project Experience:</h5>
        {contributions.map(c => <div>{c.projectToSkill.project.name}</div>)}
      </div>
  ))
}