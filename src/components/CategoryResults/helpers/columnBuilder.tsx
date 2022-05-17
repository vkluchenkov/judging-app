import { Result } from '../types';
import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

export const columnBuilder = (results: Result[], editClickHandler: (params: any) => void) => {
  const numberColumn: GridColDef = {
    field: 'number',
    headerName: '#',
    flex: 15,
    editable: false,
    sortable: false,
  };

  const nameColumn: GridColDef = {
    field: 'name',
    headerName: 'Participant',
    flex: 120,
    editable: false,
    sortable: false,
  };

  const noteColumn: GridColDef = {
    field: 'note',
    headerName: 'Note',
    editable: false,
    sortable: false,
    flex: 80,
  };

  const totalColumn: GridColDef = {
    field: 'total',
    headerName: 'Total',
    flex: 50,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  };

  const placeColumn: GridColDef = {
    field: 'place',
    headerName: 'Place',
    flex: 50,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  };

  const editColumn: GridColDef = {
    field: 'edit',
    headerName: 'Edit',
    flex: 50,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    renderCell: (params: any) => {
      return <Button onClick={() => editClickHandler(params)}>Edit</Button>;
    },
  };

  // Scores
  const scoresNames = results[0].scores.map((score) => score.name);
  const scoresColumns: GridColDef[] = scoresNames.map((name) => {
    return {
      field: name.toLowerCase(),
      headerName: name,
      flex: 70,
      editable: false,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    };
  });

  return [
    numberColumn,
    nameColumn,
    ...scoresColumns,
    noteColumn,
    totalColumn,
    placeColumn,
    editColumn,
  ];
};
