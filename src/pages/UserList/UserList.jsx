import "./userlist.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {userRows} from "../../dummyData";
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function UserList() {

      const [data,setData] = useState(userRows);
     
      const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id!==id));
      }


      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt=""/>
              {params.row.username}
            </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'transactions', headerName: 'Transaction Volume', width: 190 },
        {field:'actions', headerName:"Action", width:200,
        renderCell:(params)=>{
          return(
          <div className="userListActions">
            <Link to={"/user/"+params.row.id}>
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

        <div className="userList">
            <DataGrid className="dataGridWrapper" disableSelectionOnClick rows={data} columns={columns} pageSize={25} checkboxSelection/>
        </div>
    )
}
