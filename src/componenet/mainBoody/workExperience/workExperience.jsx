export const workExperienceList = [
  {
    title: "Junior Web Developer / Senior Opration Sptialist ",
    dicription:
      "Oddrun Group",
  },
  {
    title: "Senior Opration Sptialist 2020-2021",
    dicription:
    "Darmankade Health Agency",
  },
  {
    title: "Senior Opration Sptialist 2017-2020",
    dicription:
      "Alibaba Travel Agency",
  },
];

export function WorkExperience({ title, discription }) {
  return (
    <li>
      <h6 className="text-primary">{title}</h6>
      <p>{discription}</p>
    </li>
  );
}
