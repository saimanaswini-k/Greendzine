import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";

export default function Content() {
  const data = [
    {
      empid: 1,
      name: "Arjun",
      dob: "16-11-2000",
      role: "Software Engineer",
    },
    {
      empid: 2,
      name: "Mahesh",
      dob: "15-01-2000",
      role: "Web Developer",
    },
    {
      empid: 3,
      name: "John",
      dob: "24-07-2001",
      role: "Frontend Developer",
    },
    {
      empid: 4,
      name: "Lucy",
      dob: "01-01-2000",
      role: "Backend Developer",
    },
    {
      empid: 5,
      name: "Alex",
      dob: "15-06-2000",
      role: "NodeJS Developer",
    },
    {
      empid: 6,
      name: "Lucas",
      dob: "30-03-2001",
      role: "Backend Developer",
    },
    {
      empid: 7,
      name: "Sophia",
      dob: "07-07-2002",
      role: "React Developer",
    },
    {
      empid: 8,
      name: "Sara",
      dob: "19-02-2000",
      role: "Web Developer",
    },
    {
      empid: 9,
      name: "Luna",
      dob: "09-12-2001",
      role: "Flutter Developer",
    },
    {
      empid: 10,
      name: "Sam",
      dob: "23-08-2002",
      role: "Data Scientist",
    },
  ];

  const [name, setName] = useState();

  return (
    <div className="employee-list">
      <SearchBar setName={setName} />
      <div className="card-holder">
        {data.map((item) => (
          <EmployeeCard key={item.empid} data={item} name={name} />
        ))}
      </div>
    </div>
  );
}
