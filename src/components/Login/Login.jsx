import Header from "./Header";
import LoginForm from "./LoginForm";

export default function Login(props) {
  return (
    <div className="login-section">
      <Header />
      <LoginForm setLogged={props.setLogged} />
    </div>
  );
}
