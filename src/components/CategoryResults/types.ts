export interface CategoryResultsProps {
  currentCategory: string;
  results: Result[];
}

export interface Result {
  number: number;
  name: string;
  scores: Array<{ name: string; score: number }>;
  total: number;
  place: number;
  note: string;
}
