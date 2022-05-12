import { nanoid } from "nanoid";
class Skill {
  constructor(prerequisites, name) {
    this.prerequisites = prerequisites;  // required prerequisites
    this.name = name;
    this.id = nanoid();
  }
}

let root = new Skill([null], "Root");
let computerLiteracy = new Skill([root], "Computer Literacy");
let mcs = new Skill([root], "Microcontrollers");

let operatingSystemKnowledge = new Skill([computerLiteracy], "Operating System Knowledge");
let windows = new Skill([operatingSystemKnowledge], "Windows");
let linux = new Skill([operatingSystemKnowledge], "Linux");
let macOS = new Skill([operatingSystemKnowledge], "MacOS");
let softwareDevelopemnt = new Skill([operatingSystemKnowledge], "Software Development");

let programming = new Skill([softwareDevelopemnt], "Computer Programming");
let webDevelopment = new Skill([programming], "Web Development");
let backendDevelopent = new Skill([webDevelopment], "Backend Development");
let frontendDevelopment = new Skill([webDevelopment], "Frontend Development");
let embeddedDevelopment = new Skill([programming], "Embedded Systems");
let modelingAndSimulation = new Skill([programming], "Modeling and Simulation");

let programmingLanguages = new Skill([programming], "Programming Languages");
let c = new Skill([programmingLanguages], "C");
let cpp = new Skill([programmingLanguages], "C++");
let csharp = new Skill([programmingLanguages], "C#");
let javascript = new Skill([programmingLanguages], "Javascript");
let java = new Skill([programmingLanguages], "Java");
let python = new Skill([programmingLanguages], "Python");
let matlab = new Skill([programmingLanguages], "Matlab");
let html = new Skill([programmingLanguages], "HTML");
let css = new Skill([programmingLanguages], "CSS");
let xaml = new Skill([programmingLanguages], "Xaml");
let ladderLogic = new Skill([programmingLanguages], "Ladder Logic");
let sql = new Skill([programmingLanguages], "SQL");
let labVIEW = new Skill([programmingLanguages], "LabVIEW");

let frameworks = new Skill([programmingLanguages], "Frameworks");
let frontendFrameworks = new Skill([frontendDevelopment], "Frontend Frameworks");
let react = new Skill([javascript, html, css], "React.js");
let vue = new Skill([javascript, html, css], "Vue.js");
let wpf = new Skill([xaml, csharp], "Windows Presentation Foundation");
let qt = new Skill([cpp], "Qt");
let caliburnmicro = new Skill([wpf, csharp, xaml], "Caliburn.Micro");

let backendFrameworks = new Skill([backendDevelopent])
let nodejs = new Skill([javascript, backendFrameworks], "Nodejs");
let spring = new Skill([java, backendFrameworks], "Spring");
let django = new Skill([python, backendDevelopent], "Django");

let database = new Skill([backendDevelopent], "Databases");
let dddatabase = new Skill([database], "Document Driven Databases");
let relationaldb = new Skill([database], "Relational Databases");
let mongodb = new Skill([dddatabase], "MongoDB");
let postgresql = new Skill([relationaldb], "PostgreSQL");

let versionControl = new Skill([softwareDevelopemnt], "Version Control");
let git = new Skill([versionControl], "Git");
let svn = new Skill([versionControl], "Subversion");

let continuousIntegration = new Skill([softwareDevelopemnt], "Continuous Integration");
let teamCity = new Skill([continuousIntegration], "Team City");
let buildbot = new Skill([continuousIntegration, python], "Buildbot");

let uiuxDesign = new Skill([softwareDevelopemnt], "UI/UX Design");
let uiuxDesignSoftware = new Skill([uiuxDesign], "UI/UX Design Software");
let adobexd = new Skill([uiuxDesignSoftware], "Adobe XD");

let solidModelingSoftware = new Skill([root], "Solid Modeling Software");
let sketchup = new Skill([solidModelingSoftware], "Sketchup");

let homeConstruction = new Skill([root], "Home Construction");
let projectManagement = new Skill([root], "Project Management");

let processMethodology = new Skill([softwareDevelopemnt], "Process Methodology");
let agile = new Skill([processMethodology], "Agile");
let scrum = new Skill([agile], "Scrum");

let jira = new Skill([scrum], "Jira");  // the relationship to scrum may need to be defined differently

class Project {
  constructor(name, description, skills) {
    this.name = name;
    this.description = description;
    this.skills = skills;
    this.id = nanoid();
  }
}

let jws = new Project("JWS (JMEM Weaponeering System)", 
  "A desktop weaponeering application built for the US army. Uses a proprietary modeling and simulation framework to recreate real scenarios of interest to the Army",
  [cpp, xaml, wpf, caliburnmicro, qt, git, scrum, jira, teamCity, windows, svn]  //todo, make into separate link objects
);

let sosoa = new Project("SoSOA Analyst Explorer",
  "A web application built for the Department of Homeland Security to aid collabeoration between different individuals/teams within the agency",
  [javascript, html, css, java, vue, mongodb, postgresql, nodejs, spring, adobexd, git, jira, linux]  // todo, make into separate link objects
);

let tinyhouse = new Project("Tiny House", 
  "A compact tiny house on wheels built by Will and Jessica, with volunteer labor. Designed and built almost entirely from scratch",
  [homeConstruction, projectManagement, sketchup] // todo, make into separate link objects
);

let twoddrone = new Project("2D Drone", 
  "A drone control simulator that simulates a drone with two motors, and can fly to a point that the user clicks on the screen",
  [])

class Employer {
  constructor(parent, name) {
    this.name = name;
    this.parent = parent;
    this.id = nanoid();
  }
}

let rootEmployer = new Employer(null, "Root Employer");
let ara = new Employer(rootEmployer, "Applied Research Associates");
let nasa = new Employer(rootEmployer, "National Aeronautics and Space Association");
let ksc = new Employer(nasa, "Kennedy Space Center");
let espl = new Employer(ksc, "Electrostatics and Surface Physics Laboratory");
let asu = new Employer(rootEmployer, "Appalachian State University");

class HigherEducation {
  constructor(name) {
    this.name = name;
    this.id = nanoid();
  }
}

class Degree {
  constructor(name, major, grantingInstitution) {
    this.name = name;
    this.major = major;
    this.grantingInstitution = grantingInstitution;
    this.id = nanoid();
  }
}

class FieldOfStudy {
  constructor(name) {
    this.name = name;
    this.id = nanoid();
  }
}

let asu2 = new HigherEducation("Appalachian State University");
let appliedPhysics = new FieldOfStudy("Applied Physics");
let bs = new Degree("Bachelor of Science", appliedPhysics, asu2);
let engineeringPhysics = new FieldOfStudy("Engineering Physics");
let ms = new Degree("Master of Science", engineeringPhysics, asu2);


class Certification {
  constructor(name, grantingInstitution) {
    this.name = name;
    this.grantingInstitution = grantingInstitution;
    this.id = nanoid();
  }
}

let secretSC = new Certification("Security Clearance - Secret", "United States Department of Defense");

class Person {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = nanoid();
  }
}

let willwhite = new Person("Will White", "704-293-0871", "wrwwhite@gmail.com");

const experienceLevel = ["Beginner", "Intermediate", "Expert"];

class EducationSource {
  constructor(name, type, link) {
    this.name = name;
    this.type = type;
    this.link = link;
    this.id = nanoid();
  }
}

class PersonToSkill {
  constructor(person, skill, educationSource, experienceLevel) {
    this.person = person;
    this.skill = skill;
    this.educationSource = educationSource;
    this.experienceLevel = experienceLevel;
    this.id = nanoid();
  }
}

class PersonToProject {
  constructor(person, project, timeWorked) {
    this.person = person;
    this.project = project;
    this.timeWorked = timeWorked; // days
    this.id = nanoid();
  }
}

class PersonToDegree {
  constructor(person, degree, dateObtained, gpa) {
    this.person = person;
    this.degree = degree;
    this.dateObtained = dateObtained;
    this.gpa = gpa;
    this.id = nanoid();
  }
}

class PersonToCertification {
  constructor(person, certification, status) {
    this.person = person;
    this.certification = certification;
    this.status = status;
    this.id = nanoid();
  }
}

class PersonToEmployer {
  constructor(person, employer, jobTitle, startDate, endDate) {
    this.person = person;
    this.employer = employer;
    this.jobTitle = jobTitle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.id = nanoid();
  }
}

class SourceType {
  constructor(type) {
    this.type = type;
    this.id = nanoid();
  }
}

class ProjectToSkill {
  constructor(project, skill) {
    this.project = project; 
    this.skill = skill;
    this.id = nanoid();
  }
}

let book = new SourceType("Book");
let course = new SourceType("Course");
let onlineArticle = new SourceType("Online Article");
let mentorship = new SourceType("Mentorship");

let tcpl = new EducationSource("The C Programming Language", book, "https://en.wikipedia.org/wiki/The_C_Programming_Language");
let computationalPhysics = new EducationSource("PHY 5020 - Computational Methods in Physics and Engineering", course, "");
let microcontrollers = new EducationSource("PHY 5735 - Microcontrollers", course, "");
let codeAcademyC = new EducationSource("Code Academy C Course", course, "https://www.codecademy.com/learn/learn-c");
let generalInternetResource = new EducationSource("General Internet Resource", onlineArticle, "");
let atourofcpp = new EducationSource("A Tour of C++", book, "https://www.stroustrup.com/tour2.html");
let davidcmentorship = new EducationSource("Mentorship from Senior Developer", mentorship, "");
let apidesignincpp = new EducationSource("Api Design in C++", book, "");
let cs1440 = new EducationSource("AP Computer Science", course, "");
let cs2440 = new EducationSource("CS 2440 - Intro to Computer Science 2", course, "");
let codeAcademyPython = new EducationSource("Code Academy Python Course", course, "https://www.codecademy.com/learn/learn-python");
let opensourcerobotics = new EducationSource("Open Source Robotics", course, "");



class ProjectExperience {
  constructor(person, projectToSkill) {
    this.person = person;
    this.projectToSkill = projectToSkill;
    this.id = nanoid();
  }
}

let csharponjws = new ProjectToSkill(jws, csharp);
let javaonsosoa = new ProjectToSkill(sosoa, java);
let pythonon2ddrone = new ProjectToSkill(twoddrone, python);

let willc = new PersonToSkill(willwhite, c, [tcpl, computationalPhysics, microcontrollers, codeAcademyC, generalInternetResource], "Intermediate");
let usecsharponjws = new ProjectExperience(willwhite, csharponjws);
let willcpp = new PersonToSkill(willwhite, cpp, [atourofcpp, davidcmentorship, generalInternetResource], "Advanced");
let willcsharp = new PersonToSkill(willwhite, csharp, [usecsharponjws, davidcmentorship, generalInternetResource], "Intermediate");
let willjava = new PersonToSkill(willwhite, java, [cs1440, cs2440, generalInternetResource], "Intermediate");
let usejavaonsosoa = new ProjectExperience(willwhite, javaonsosoa);
let willpython = new PersonToSkill(willwhite, python, [codeAcademyPython, opensourcerobotics]);
let willusedpythonon2ddrone = new ProjectExperience(willwhite, pythonon2ddrone);

let willjws = new PersonToProject(willwhite, jws);
let willsosoa = new PersonToProject(willwhite, sosoa);
let willtinyhouse = new PersonToProject(willwhite, tinyhouse);
let will2ddrone = new PersonToProject(willwhite, twoddrone);

let willep = new PersonToDegree(willwhite, ms, "December 2018", "4.00");
let willap = new PersonToDegree(willwhite, bs, "December 2017", "3.71");

let willsc = new PersonToCertification(willwhite, secretSC, "Active");

let willara = new PersonToEmployer(willwhite, ara, "Software Developer", "January 2019", "Present");
let willnasa = new PersonToEmployer(willwhite, espl, "Intern", "May 2018", "August 2018");
let willasu = new PersonToEmployer(willwhite, asu, "Teaching Assistant", "January 2018", "December 2018");

let willSkills = [
  willc,
  willcpp,
  willcsharp,
  willjava,
  willpython
]

let willProjects = [ 
  willjws,
  willsosoa,
  willtinyhouse,
  will2ddrone,
]

let willDegrees = [
  willep,
  willap
]

let willCerts = [
 willsc
]

let willEmployers = [
  willara,
  willnasa,
  willasu
]

let willresume = {
  person: willwhite,
  skills: willSkills,
  projects: willProjects,
  degrees: willDegrees,
  employers: willEmployers,
  certifications: willCerts
}

let personToSkills = willSkills;

export function getPersonToSkill(id) {
  console.log("\n\ngetPersonToSkill");
  console.log("id: " + id);
  for (let x of personToSkills)
    console.log("xid: " + x.id);

  return personToSkills.find(item => item.id === id);
}

export default willresume;