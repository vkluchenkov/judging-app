import { Header } from '../Header';
import { Scoring } from '../Scoring';
import { criterias } from '../mocks/criterias';
import { CategoryResults } from '../CategoryResults';
import { results } from '../mocks/results';

export const Main: React.FC = () => {
  const scoringHandler = async (results: Record<string, number | string>) => {
    console.log(results);
  };

  return (
    <>
      <Header
        currentContest='Dance Weekend in Warsaw'
        judge='Leandro Ferreyra'
        currentCategory='Professionals semi-final'
      />
      {/* <Scoring name='Polina Ivanova' number={135} criterias={criterias} onSubmit={scoringHandler} /> */}
      <CategoryResults currentCategory='Professionals semi-final' results={results} />
    </>
  );
};
