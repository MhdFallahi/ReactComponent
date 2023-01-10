import { Education, EducationList } from "./education/education";
import { Skill } from "./skills/skils";
import { skillsList } from "./skills/skils";
import { WorkExperience } from "./workExperience/workExperience";
import { workExperienceList } from "./workExperience/workExperience";
import { EducationList } from "./education/education";

export function MainBody() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md mb-5">
          <h2 className="mb-5">Work Experience</h2>
          <ul>
            {workExperienceList.map((workExperience) => (
              <WorkExperience
                title={workExperience.title}
                discription={workExperience.dicription}
              />
            ))}
          </ul>
        </div>

        <div className="col-md mb-5">
          <h2 className="mb-5">Education</h2>
          <ul>
            {EducationList.map((education) => (
              <Education
                title={education.title}
                discription={education.discription}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-5">
          <h2 className="mb-5">Skills</h2>

          {skillsList.map((skill) => (
            <Skill title={skill.title} percent={skill.percent} />
          ))}
        </div>
      </div>
    </main>
  );
}
