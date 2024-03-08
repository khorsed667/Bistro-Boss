import {
  faTrash,
  faUserShield,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("https://bistro-boss-server-9677.onrender.com/user");
      return res.json();
    },
  });

  const handelUpdateRole = (user) => {
    fetch(`https://bistro-boss-server-9677.onrender.com/user/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Succeed!",
            text: `${user.name} is admin now!`,
            icon: "success",
          });
        }
      });
  };

  const handelDelete = () => {};

  return (
    <div className="w-full">
      <Helmet>
        <title>All Users | Bistro Boss</title>
      </Helmet>
      <div className="w-5/6 mx-auto bg-white m-5 p-5">
        <div className="py-3">
          <p className="font-cinzel text-2xl font-bold">
            Total Users: {users.length}
          </p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => handelUpdateRole(user)}
                        className="btn bg-[#D1A054] text-white"
                      >
                        {user.role === "admin" ? (
                          <>
                            <FontAwesomeIcon icon={faUserShield} />
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faUsers} />
                          </>
                        )}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handelDelete(user)}
                        className="btn bg-red-600 text-white"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
