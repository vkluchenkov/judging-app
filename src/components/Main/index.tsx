import { Header } from '../Header';
import { Scoring } from '../Scoring';
import { criterias } from '../mocks/criterias';
import { CategoryResults } from '../CategoryResults';
import { results } from '../mocks/results';
import { MessageScreen } from '../MessageScreen';
import { useMemo, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

declare type View = 'scoring' | 'message' | 'results' | '';

export const Main: React.FC = () => {
  const [view, setView] = useState<View>('');

  const scoringHandler = async (results: Record<string, number | string>) => {
    console.log(results);
  };

  const resultsEditHandler = (number: number) => {
    console.log(number);
    setView('scoring');
  };

  // temp for dev
  const viewHandler = (event: SelectChangeEvent) => setView(event.target.value as View);

  const currentView = useMemo(() => {
    if (view === 'scoring')
      return (
        <Scoring
          name='Polina Ivanova'
          number={135}
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
          onSubmit={resultsEditHandler}
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
        <Select labelId='label' id='select' value={view} label='View' onChange={viewHandler}>
          <MenuItem value={'scoring'}>Scoring</MenuItem>
          <MenuItem value={'message'}>Message</MenuItem>
          <MenuItem value={'results'}>Results</MenuItem>
          <MenuItem value={''}>No view</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
