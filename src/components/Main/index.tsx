import { Header } from '../Header';
import { Scoring } from '../Scoring';
import { criterias } from '../mocks/criterias';
import { CategoryResults } from '../CategoryResults';
import { results } from '../mocks/results';
import { MessageScreen } from '../MessageScreen';
import { useMemo, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ScoresPayload } from '../Scoring/types';

declare type View = 'scoring' | 'message' | 'results';

export const Main: React.FC = () => {
  const [view, setView] = useState<View | null>(null);

  const scoringHandler = async (results: ScoresPayload) => {
    console.log(results);
  };

  const resultsEditHandler = (number: number) => {
    console.log(number);
    setView('scoring');
  };

  const resultsSubmitHandler = () => {
    setView(null);
  };

  // temp for dev
  const viewHandler = (event: SelectChangeEvent) =>
    setView(event.target.value ? (event.target.value as View) : null);

  const currentView = useMemo(() => {
    if (view === 'scoring')
      return (
        <Scoring
          name='Polina Ivanova'
          number={135}
          performanceId={135}
          criterias={criterias}
          onSubmit={scoringHandler}
        />
      );
    if (view === 'message')
      return <MessageScreen message='Thank you! Please wait for the next participant.' />;
    if (view === 'results')
      return (
        <CategoryResults
          currentCategory='Professionals semi-final'
          results={results}
          onEdit={resultsEditHandler}
          onSubmit={resultsSubmitHandler}
        />
      );
    return <MessageScreen message="You've nothing to do, yey!" />;
  }, [view]);

  return (
    <>
      <Header
        currentContest='Dance Weekend in Warsaw'
        judge='Leandro Ferreyra'
        currentCategory='Professionals semi-final'
      />
      {currentView}

      {/* temp for dev */}
      <FormControl style={{ width: '200px', margin: '20px' }}>
        <InputLabel id='label'>View</InputLabel>
        <Select
          labelId='label'
          id='select'
          value={view ? view : ''}
          label='View'
          onChange={viewHandler}
        >
          <MenuItem value={'scoring'}>Scoring</MenuItem>
          <MenuItem value={'message'}>Message</MenuItem>
          <MenuItem value={'results'}>Results</MenuItem>
          <MenuItem value={''}>Reset view</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
