import { fireEvent, render as testingRender, RenderResult, act } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';

import { Scoring } from '.';
import { ScoringProps } from './types';

describe('<Scoring /> spec', () => {
  let onSubmit: jest.Mock;
  let props: ScoringProps;

  beforeEach(() => {
    onSubmit = jest.fn();
    props = {
      name: 'Polina Ivanova',
      performanceId: 135,
      number: 135,
      criterias: [{ id: 1, name: 'Mock name', description: 'Mock description' }],
      onSubmit,
    };
  });

  const render = () => {
    return testingRender(<Scoring {...props} />);
  };

  it('Note value should equal input', async () => {
    const { findByTestId } = render();
    const muiInput = await findByTestId('note-input');
    const input = muiInput.querySelector('textarea');
    const value = 'someText123';
    act(() => {
      fireEvent.change(input as Element, { target: { value } });
    });
    expect(input!.value).toEqual(value);
  });

  it('onSubmit should be called once on button click', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('submit-button');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(onSubmit).toBeCalledTimes(1);
  });

  it('Slider title should be equal props', async () => {
    const { findByTestId } = render();
    const sliderTitle = await findByTestId('criteria1');
    expect(sliderTitle.textContent).toBe(`${props.criterias[0].name}:`);
  });

  it('Slider initial value should be equal 5', async () => {
    const { findByTestId } = render();
    const slider = await findByTestId('slider');
    const sliderInput = slider.querySelector('input');
    expect(sliderInput!.value).toBe('5');
  });

  it('Slider title tooltip should be visible on hover over icon', async () => {
    const { findByTestId } = render();
    const sliderIcon = await findByTestId('tooltip-icon');

    await act(async () => {
      fireEvent.mouseEnter(sliderIcon);
      await new Promise((r) => setTimeout(r, 200));
    });
    const sliderTooltip = document.querySelector('.MuiTooltip-tooltip');
    expect(sliderTooltip).toBeVisible();
    expect(sliderTooltip?.textContent).toBe(props.criterias[0].description);
  });
});
