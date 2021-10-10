import "./productlists.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {productRows} from "../../dummyData";
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function ProductLists() {
    const [data,setData] = useState(productRows);

    const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id!==id));
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 200, renderCell: (params)=>{
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.img} alt=""/>
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Email', width: 230 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'price', headerName: 'price', width: 190 },
        {field:'actions', headerName:"Action", width:200,
        renderCell:(params)=>{
          return(
          <div className="userListActions">
            <Link to={"/product/"+params.row.id}>
            <button className="userListEdit">
              Edit
            </button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </div>

          )
        }
      }

      ];

    return (
        <div className="ProductListsCont">
            <DataGrid className="dataGridWrapper" 
            disableSelectionOnClick 
            rows={data} 
            columns={columns} 
            pageSize={25} 
            checkboxSelection/>
        </div>
    )
}
