/** @jsxImportSource @emotion/react */

import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styles } from './styles';
import { CategoryResultsProps } from './types';

export const CategoryResults: React.FC<CategoryResultsProps> = ({
  currentCategory,
  results,
  onSubmit,
}) => {
  const editClickHandler = (params: any) => {
    onSubmit(params.row.number);
  };

  const newColumns = (): GridColDef[] => {
    const numberColumn = {
      field: 'number',
      headerName: '#',
      flex: 50,
      editable: false,
      sortable: false,
    };

    const nameColumn = {
      field: 'name',
      headerName: 'Participant',
      flex: 150,
      editable: false,
      sortable: false,
    };

    const noteColumn = {
      field: 'note',
      headerName: 'Note',
      editable: false,
      sortable: false,
      flex: 250,
    };

    const totalColumn = {
      field: 'total',
      headerName: 'Total',
      flex: 70,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    };

    const placeColumn = {
      field: 'place',
      headerName: 'Place',
      flex: 70,
      editable: false,
      // align: 'center',
      // headerAlign: 'center',
    };

    const editColumn = {
      field: 'edit',
      headerName: 'Edit',
      flex: 70,
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
    const scoresColumns = scoresNames.map((name) => {
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

  const columns: GridColDef[] = [
    {
      field: 'number',
      headerName: '#',
      flex: 50,
      editable: false,
      sortable: false,
    },
    {
      field: 'name',
      headerName: 'Participant',
      flex: 150,
      editable: false,
      sortable: false,
    },
    {
      field: 'choreography',
      headerName: 'Choreo',
      flex: 70,
      editable: false,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'teachnique',
      headerName: 'Tech',
      flex: 70,
      editable: false,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'image',
      headerName: 'Image',
      flex: 70,
      editable: false,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'music',
      headerName: 'Music',
      flex: 70,
      editable: false,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'note',
      headerName: 'Note',
      editable: false,
      sortable: false,
      flex: 250,
    },
    {
      field: 'total',
      headerName: 'Total',
      flex: 70,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'place',
      headerName: 'Place',
      flex: 70,
      editable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'edit',
      headerName: 'Edit',
      flex: 70,
      editable: false,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: (params) => {
        return <Button onClick={() => editClickHandler(params)}>Edit</Button>;
      },
    },
  ];

  const rows = [
    {
      id: 1,
      number: 154,
      name: 'Гадя Петрова',
      choreography: 5,
      teachnique: 5,
      image: 5,
      'music conformity': 5,
      total: 20,
      place: 1,
      note: 'Ну вы Гадя и Петрова!',
    },
  ];

  return (
    <Box css={styles.box}>
      <Typography variant='h5' align='center'>
        {currentCategory} results:
      </Typography>
      <DataGrid
        css={styles.grid}
        rows={rows}
        columns={newColumns()}
        pageSize={100}
        disableSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        hideFooter
        autoHeight
      />
    </Box>
  );
};
