/** @jsxImportSource @emotion/react */

import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { columnBuilder } from './helpers/columnBuilder';
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

  const columns: GridColDef[] = useMemo(() => {
    return columnBuilder(results, editClickHandler);
  }, [results, editClickHandler]);

  const rows = [
    {
      id: 1,
      number: 154,
      name: 'Гадя Петрова',
      choreography: 5,
      technique: 5,
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
        columns={columns}
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
