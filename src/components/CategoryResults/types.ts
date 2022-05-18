export interface CategoryResultsProps {
  currentCategory: string;
  results: Result[];
  onSubmit: () => void;
  onEdit: (number: number) => void;
}

export interface Result {
  number: number;
  name: string;
  scores: Array<{ name: string; score: number }>;
  total: number;
  place: number;
  note: string;
  conflict?: number | null;
}
