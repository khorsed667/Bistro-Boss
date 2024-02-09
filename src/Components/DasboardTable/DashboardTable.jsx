import React from 'react';
import { Helmet } from 'react-helmet';

const DashboardTable = ({HeadingInfo, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6}) => {
    return (
        <div className="w-full">
      <Helmet>
        <title>All Users | Bistro Boss</title>
      </Helmet>
      <div className="w-5/6 mx-auto bg-white m-5 p-5">
        <div className="py-3">
          <p className="font-cinzel text-2xl font-bold">
            {HeadingInfo}
          </p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white">
                  <th></th>
                  <th>{Heading1}</th>
                  <th>{Heading2}</th>
                  <th>{Heading3}</th>
                  <th>{Heading4}</th>
                  <th>{Heading5}</th>
                  <th>{Heading6}</th>
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

export default DashboardTable;