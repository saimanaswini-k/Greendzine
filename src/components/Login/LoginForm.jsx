import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      props.setLogged(true);
      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <form action="" className="login-form" onSubmit={submitForm}>
      <div className="input-section">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Login</button>
      <a href="#">Forgot Password?</a>
      <Toaster position="top-center" richColors />
    </form>
  );
}
