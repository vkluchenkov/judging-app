import { Result } from '../CategoryResults/types';

export const results: Result[] = [
  {
    number: 1,
    name: 'Гадя Петрова',
    scores: [
      {
        name: 'Choreography',
        score: 7,
      },
      {
        name: 'Technique',
        score: 7,
      },
      {
        name: 'Image',
        score: 7,
      },
      {
        name: 'Charisma',
        score: 7,
      },
      {
        name: 'Music conformity',
        score: 7,
      },
    ],
    total: 35,
    place: 1,
    note: 'Ну вы Гадя и Петрова, однако',
  },
  {
    number: 2,
    name: 'Вася Иванова',
    scores: [
      {
        name: 'Choreography',
        score: 6,
      },
      {
        name: 'Technique',
        score: 6,
      },
      {
        name: 'Image',
        score: 6,
      },
      {
        name: 'Charisma',
        score: 6,
      },
      {
        name: 'Music conformity',
        score: 6,
      },
    ],
    total: 30,
    place: 1,
    note: '',
  },
];
