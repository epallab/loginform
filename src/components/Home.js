import React from "react";
import "./Home.css";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="home-main">
      <div className="log-in-container">
        <div className="log-in-head">Login</div>
        <div style={{ width: "80%" }}>
          <div className="form-inp">
            <input
              placeholder=" "
              type="email"
              name="email"
              id="email"
              autocomplete="off"
            />
            <label htmlFor="">Email</label>
            <div className="inp-icon">
              <MdOutlineAttachEmail />
            </div>
          </div>
        </div>
        <div style={{ width: "80%" }}>
          <div className="form-inp">
            <input
              placeholder=" "
              type="password"
              name="password"
              id="password"
              // autocomplete="off"
            />
            <label htmlFor="">Password</label>
            <div className="inp-icon">
              <RiLockPasswordLine />
            </div>
          </div>
        </div>

        <div className="forget-pass">
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember-me"
              className="remember-me-inp"
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <div className="forget-password">Forget Password</div>
        </div>
        <div style={{ width: "80%" }}>
          <button className="log-in-btn">Log In</button>
        </div>
        <div className="sign-up-container">
          Do not have an account ? <span className="sign-up"> Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
