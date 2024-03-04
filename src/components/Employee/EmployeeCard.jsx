export default function EmployeeCard(props) {
  return !props.name ? (
    <div className="employee-card">
      <p className="title">EMP ID</p>
      <p className="title">:</p>
      <p>{props.data.empid}</p>
      <p className="title">Name</p>
      <p className="title">:</p>
      <p>{props.data.name}</p>
      <p className="title">DOB</p>
      <p className="title">:</p>
      <p className="dob">{props.data.dob}</p>
      <p className="title">Role</p>
      <p className="title">:</p>
      <p className="pos">{props.data.role}</p>
      <div className="card-id">
        <p>{props.data.empid}</p>
      </div>
    </div>
  ) : (
    props.data.name.toUpperCase().includes(props.name.toUpperCase()) && (
      <div className="employee-card">
        <p className="title">EMP ID</p>
        <p className="title">:</p>
        <p>{props.data.empid}</p>
        <p className="title">Name</p>
        <p className="title">:</p>
        <p>{props.data.name}</p>
        <p className="title">DOB</p>
        <p className="title">:</p>
        <p className="dob">{props.data.dob}</p>
        <p className="title">Role</p>
        <p className="title">:</p>
        <p className="pos">{props.data.role}</p>
        <div className="card-id">
          <p>{props.data.empid}</p>
        </div>
      </div>
    )
  );
}
