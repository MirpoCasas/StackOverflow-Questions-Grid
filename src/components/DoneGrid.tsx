import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const URL = 'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow'

function getOwner(params: any) {
  return params.row.owner.display_name;
}


const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 500 },
  { field: 'tags', headerName: 'Tags', width: 200 },
  { field: 'owner', headerName: 'Owner', width: 150, valueGetter: getOwner},
  { field: 'is_answered', headerName: 'Is Answered', width: 150 },
  { field: 'score', headerName: 'Score', width: 150 },
  { field: 'link', headerName: 'Link', width: 150, renderCell: (params: GridRenderCellParams<Date>) => (
    <strong>
      <a
        href={params.row.link}
        target='_blank'
        rel='noreferrer'
      >
        Open
      </a>
    </strong>
  ) },
];


const DoneGrid = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((data) => setTableData(data.items))
      
  })

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(row: any) =>  row.question_id}
        pagination
      />
    </div>
  );
}


export default DoneGrid;