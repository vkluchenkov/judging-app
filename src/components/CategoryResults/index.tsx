/** @jsxImportSource @emotion/react */

import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowClassNameParams } from '@mui/x-data-grid';
import { useCallback, useMemo, useState } from 'react';
import { columnBuilder } from './helpers/columnBuilder';
import { styles } from './styles';
import { CategoryResultsProps } from './types';

export const CategoryResults: React.FC<CategoryResultsProps> = ({
  currentCategory,
  results,
  onEdit,
  onSubmit,
}) => {
  const buttonDisabled = useMemo(() => {
    const filter = results.filter((res) => res.conflict);
    console.log(!!!filter.length);
    return !!filter.length;
  }, [results]);

  const editClickHandler = useCallback(
    (params: any) => {
      onEdit(params.row.number);
    },
    [onEdit]
  );

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
        conflict: !!res.conflict,
      };
    });
  }, [results]);

  return (
    <Box css={styles.box}>
      <Typography variant='h5' align='center'>
        {currentCategory} results:
      </Typography>
      <DataGrid
        getRowClassName={(params: GridRowClassNameParams) =>
          params.row.conflict ? 'conflict' : ''
        }
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
      <Typography variant='body1' align='center' display={buttonDisabled ? 'block' : 'none'}>
        You need to resolve all conflicts before submitting results
      </Typography>
      <Button
        type='button'
        size='large'
        variant='contained'
        css={styles.button}
        data-test='submit-button'
        onClick={onSubmit}
        disabled={buttonDisabled}
      >
        Submit category
      </Button>
    </Box>
  );
};
