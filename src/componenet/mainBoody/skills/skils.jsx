export const skillsList = [
  { title: "HTML", percent: "80" },
  { title: "Css", percent: "75" },
  { title: "JavaScript", percent: "55" },
  { title: "React", percent: "35" },
  { title: "Redux", percent: "20" },
  { title: "Excel", percent: "80" },
  { title: "Process design", percent: "75" },
  { title: "BMPN", percent: "70" },
];

export function Skill({ title, percent }) {
  return (
    <div className="progress mb-4" style={{ height: "25px" }}>
      <div
        className="progress-bar bg-primary text-left pl-2"
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {title}
      </div>
    </div>
  );
}
