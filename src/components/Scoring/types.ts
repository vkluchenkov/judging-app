import { Criteria } from '../../models/criteria';

export interface ScoringProps {
  name: string;
  number: number;
  criterias: Criteria[];
  onSubmit: (results: Record<string, number | string>) => void;
}
