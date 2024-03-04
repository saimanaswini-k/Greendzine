export default function ProgressCard(props) {
  return (
    <div className="progress-container">
      <p>Productivity on {props.day}</p>
      <p>{props.perc}</p>
      <div className="progress">
        <div className="bar" style={{ width: props.perc }}></div>
      </div>
    </div>
  );
}
