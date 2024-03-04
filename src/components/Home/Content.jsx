import ProgressCard from "./ProgressCard";

export default function Content() {
  return (
    <div className="dashboard">
      <p className="heading">Employee Productivity Dashboard</p>
      <div className="progresscard-container">
        <ProgressCard day="Monday" perc="4%" />
        <ProgressCard day="Tuesday" perc="92%" />
        <ProgressCard day="Wednesday" perc="122%" />
        <ProgressCard day="Thursday" perc="93%" />
        <ProgressCard day="Friday" perc="89%" />
        <ProgressCard day="Saturday" perc="98%" />
      </div>
    </div>
  );
}
