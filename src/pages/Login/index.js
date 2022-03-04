import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="Login Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <Gap height={18} />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Gap height={50} />
        <Button title="Login" type="button" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link
          title="Belum punya akun? Silahkan daftar!"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
