import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contact, setContact] = useState([]);

  const { authorizationToken } = useAuth();

  const allContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`user ${JSON.stringify(data)}`);
      setContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        allContactData();
        toast.success("Delete Contact Data");
      } else {
        toast.error("Error Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authorizationToken) {
      allContactData();
    }
  }, [authorizationToken]);

  return (
    <>
      <section className="admin-contact-section">
        <div className="container">
          <h1>Admin Contact Data</h1>
        </div>
        <div className="container admin-contact">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.message}</td>
                    <td>
                      <button onClick={() => deleteContact(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminContacts;
