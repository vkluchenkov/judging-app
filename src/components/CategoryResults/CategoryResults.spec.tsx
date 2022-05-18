import {
  fireEvent,
  render as testingRender,
  RenderResult,
  act,
  screen,
} from '@testing-library/react';

import { CategoryResults } from '.';
import { CategoryResultsProps } from './types';

describe('<CategoryResults /> spec', () => {
  let onSubmit: jest.Mock;
  let onEdit: jest.Mock;
  let props: CategoryResultsProps;

  beforeEach(() => {
    onSubmit = jest.fn();
    onEdit = jest.fn();
    props = {
      currentCategory: 'category',
      results: [
        {
          number: 1,
          name: 'Гадя Петрова',
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
          note: 'Ну вы Гадя и Петрова, однако',
          conflict: 2,
        },
      ],
      onSubmit,
      onEdit,
    };
  });

  const render = async () => {
    return await testingRender(<CategoryResults {...props} />);
  };

  it('Title should be equal currentCategory results', async () => {
    const { findByTestId } = await render();
    const title = await findByTestId('title');
    expect(title.textContent).toEqual(`${props.currentCategory} results:`);
  });

  it('Click on Edit button should call onEdit with number', async () => {
    const { findByTestId } = await render();
    const editBtn = await findByTestId('edit-btn');
    await act(async () => {
      fireEvent.click(editBtn);
    });
    expect(props.onEdit).toBeCalledTimes(1);
    expect(props.onEdit).toBeCalledWith(1);
  });

  it('Submit should be disabled if conflict in results', async () => {
    const { findByTestId } = await render();
    const submitBtn = await findByTestId('submit-button');
    expect(submitBtn).toBeDisabled();
  });

  it('Conflict note should be visible if conflict in results', async () => {
    const { findByTestId } = await render();
    const conflictNote = await findByTestId('conflict-note');
    expect(conflictNote).toBeVisible();
  });

  it('Conflict note should not be visible if no conflict in results', async () => {
    props.results[0].conflict = 0;
    const { findByTestId } = await render();
    const conflictNote = await findByTestId('conflict-note');
    expect(conflictNote).not.toBeVisible();
  });

  it('Submit should be enabled if no conflict in results', async () => {
    props.results[0].conflict = 0;
    const { findByTestId } = await render();
    const submitBtn = await findByTestId('submit-button');
    expect(submitBtn).toBeEnabled();
  });

  it('Submit should call onSubmit if no conflict in results', async () => {
    props.results[0].conflict = 0;
    const { findByTestId } = await render();
    const submitBtn = await findByTestId('submit-button');
    await act(async () => {
      fireEvent.click(submitBtn);
    });
    expect(onSubmit).toBeCalledTimes(1);
  });
});
