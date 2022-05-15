import { Button } from '@mui/material';
import { Header } from '../Header';
import { Scoring } from '../Scoring';

export const Main: React.FC = () => {
  return (
    <>
      <Header
        currentContest='Dance Weekend in Warsaw'
        judge='Leandro Ferreyra'
        currentCategory='Professionals semi-final'
      />
      <Scoring participantName='Polina Ivanova' participantNumber={135} />
    </>
  );
};
