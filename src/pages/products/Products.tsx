import { useState } from 'react';
import './products.scss'
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "img",
//     headerName: "Image",
//     width: 100,
//     renderCell: (params) => {
//       return <img src={params.row.img || "/noavatar.png"} alt="" />;
//     },
//   },
//   {
//     field: "title",
//     type: "string",
//     headerName: "Title",
//     width: 250,
//   },
//   {
//     field: "color",
//     type: "string",
//     headerName: "Color",
//     width: 150,
//   },
//   {
//     field: "price",
//     type: "string",
//     headerName: "Price",
//     width: 200,
//   },
//   {
//     field: "producer",
//     headerName: "Producer",
//     type: "string",
//     width: 200,
//   },
//   {
//     field: "createdAt",
//     headerName: "Created At",
//     width: 200,
//     type: "string",
//   },
//   {
//     field: "inStock",
//     headerName: "In Stock",
//     width: 150,
//     type: "boolean",
//   },
// ];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Image",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
   flex: 1,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    flex: 1,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    flex: 1.5
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
   flex: 1,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    flex: 0.7
  },
];

const Products = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className='products'>
      <div className="info">
        <h1>Users</h1>
         <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>

      <DataTable columns={columns} rows={products} slug='products'/>
       {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products
