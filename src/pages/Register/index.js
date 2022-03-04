import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="Register Background" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <Gap height={18} />
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
        <Button title="Register" type="button" />
        <Gap height={100} />
        <Link title="Kembali ke Login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
