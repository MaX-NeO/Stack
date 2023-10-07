import React from 'react'
import { useState, useEffect } from 'react';
import { getUser, deleteUser } from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import { Trash, FileEdit } from 'lucide-react';
import Layout from '../Layout/Layout';
import { ToastContainer, toast } from 'react-toastify';

const ViewUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUser()
      setUsers(response.data);
    }

    catch (error) {
      console.log(error);
    }
    console.log(users);
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/user/edit/${id}`);
  }
  const handleDelete = async (id,namex) => {
    try {
      const res = await deleteUser(id);
      console.log(res.status)
      if (res.status == 200) {
        toast.success(`${namex} deleted successfully !`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      fetchUsers();
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Layout />
      <div className='mainx'>
        <div className='shadow bg-white data-table-container'>
          <table className='data-table'>
            <thead className='data-table-thead shadow'>
              <tr>

                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Role
                </th>
                <th>
                  Phone
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.uid}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleEdit(user.uid)}><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleDelete(user.uid, user.name)}><Trash color="#ff0000" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

    </>
  )
}
export default ViewUsers;