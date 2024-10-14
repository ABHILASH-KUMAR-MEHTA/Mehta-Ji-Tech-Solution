import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/login";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleGet = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setlogin({
      ...login,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      const res_data = await response.json();
      console.log("server run", res_data);
      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login Successfully");
        setlogin({
          email: "",
          phone: "",
        });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-contact">
        '
        <div className="contact-contect container">
          <div className="container grid grid-two-cols">
            <div className="conatct-image">
              <img
                className="register"
                src="/images/register.png"
                alt=""
                width="80%"
                height="auto"
              />
            </div>
            <section className="section-form ">
              <h1 className="main-heading">Login Now</h1>
              <form className="mail" onSubmit={handleLogin}>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={login.email}
                  onChange={handleGet}
                  placeholder="Enter your Email...."
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password...."
                  autoComplete="off"
                  value={login.password}
                  onChange={handleGet}
                  required
                />
                <div>
                  <button type="submit">Login</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
