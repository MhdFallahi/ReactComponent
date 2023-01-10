export const EducationList = [
  {
    title: "Mine engineering / Amirkabir University of technology 2013-2019",
    discription:
      "Working with lab and pilot plant scale project in minerals processing including flotation, magnetic separation, screening.",
  },
  {
    title: "Dr Hashtroodi High School 2008-2012",
    discription: " Mathematical and physics field student ",
  },
];

export function Education({ title, discription }) {
  return (
    <li>
      <h6 className="text-primary">{title}</h6>
      <p>{discription}</p>
    </li>
  );
}
