import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Register Successfully");
        setuser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-contect container">
          <h1 className="main-heading">Register Here</h1>
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
            <section className="section-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  placeholder="Enter your Username...."
                  required
                />
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter your Email...."
                  required
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={user.phone}
                  placeholder="Enter your Phone No...."
                  onChange={handleInput}
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password...."
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
                <div>
                  <button type="submit">Register</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
