import { Criteria } from '../../models/criteria';

export interface Score {
  criteriaId: number;
  score: number;
}

export interface ScoringProps {
  name: string;
  number: number;
  performanceId: number;
  criterias: Criteria[];
  onSubmit: (results: any) => void;
}

export interface ScoresPayload {
  scores: Score[];
  note: string;
  performanceId: number;
}
