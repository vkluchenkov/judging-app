/** @jsxImportSource @emotion/react */

import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { columnBuilder } from './helpers/columnBuilder';
import { styles } from './styles';
import { CategoryResultsProps } from './types';

export const CategoryResults: React.FC<CategoryResultsProps> = ({
  currentCategory,
  results,
  onEdit,
  onSubmit,
}) => {
  const editClickHandler = (params: any) => {
    onEdit(params.row.number);
  };

  const columns: GridColDef[] = useMemo(() => {
    return columnBuilder(results, editClickHandler);
  }, [results, editClickHandler]);

  const rows = useMemo(() => {
    return results.map((res) => {
      const resScores: Record<string, number> = {};
      res.scores.forEach((s) => (resScores[s.name.toLowerCase()] = s.score));
      return {
        id: res.number,
        number: res.number,
        name: res.name,
        ...resScores,
        total: res.total,
        place: res.place,
        note: res.note,
      };
    });
  }, [results]);

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
      <Button
        type='button'
        size='large'
        variant='contained'
        css={styles.button}
        data-test='submit-button'
        onClick={onSubmit}
      >
        Submit category
      </Button>
    </Box>
  );
};
