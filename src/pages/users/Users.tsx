import { GridColDef } from '@mui/x-data-grid';
import './users.scss';
import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';


// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "img",
//     headerName: "Avatar",
//     width: 100,
//     renderCell: (params) => {
//       return <img src={params.row.img || "/noavatar.png"} alt="" />;
//     },
//   },
//   {
//     field: "firstName",
//     type: "string",
//     headerName: "First name",
//     width: 150,
//   },
//   {
//     field: "lastName",
//     type: "string",
//     headerName: "Last name",
//     width: 150,
//   },
//   {
//     field: "email",
//     type: "string",
//     headerName: "Email",
//     width: 200,
//   },
//   {
//     field: "phone",
//     type: "string",
//     headerName: "Phone",
//     width: 200,
//   },
//   {
//     field: "createdAt",
//     headerName: "Created At",
//     width: 200,
//     type: "string",
//   },
//   {
//     field: "verified",
//     headerName: "Verified",
//     width: 150,
//     type: "boolean",
//   },
// ];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1.5,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
  },
  {
    field: "verified",
    headerName: "Verified",
    flex: 0.7,
  },
];

const Users = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>

      <DataTable columns={columns} rows={userRows} slug='users'/>
       {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users
