import react, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getPersonToSkill } from '../../data';
import './SkillOfPerson.css';

export default function SkillOfPerson(props) {
  const [obj, setObj] = useState({});
  let params = useParams();

  useEffect(() => {
    populateObj();
  }, []);

  function populateObj() {
    let pts = getPersonToSkill(params.persontoskillid);
    console.log("pts: " + JSON.stringify(pts));
    setObj(pts);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    (obj !== null && typeof(obj) !== "undefined" && !isEmpty(obj)) && (
      <div>
        <h3>{obj.person.name} and {obj.skill.name}</h3>
        <p>{obj.person.name} is {obj.experienceLevel}</p>
        <h5>Where {obj.person.name} learned {obj.skill.name}:</h5>
        {obj.educationSource.map(source => <p>{source.name}</p>)}
      </div>
  ))
}