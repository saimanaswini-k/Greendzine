import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Navbar from "../Common/Navbar";
import Content from "./Content";
import { useEffect } from "react";

export default function Employee(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.logged) navigate("/login");
  }, [props.logged]);

  return (
    props.logged && (
      <div className="employee-section">
        <Header />
        <Content />
        <Navbar />
      </div>
    )
  );
}
