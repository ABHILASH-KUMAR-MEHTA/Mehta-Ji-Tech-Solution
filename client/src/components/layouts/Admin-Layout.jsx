import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
   

  if(isLoading){
    return <h1>Loading....</h1>
  }


  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/user">
                  <FaUser /> users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contact">
                  <FaMessage /> contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/service">
                  <FaRegListAlt /> services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome /> home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
