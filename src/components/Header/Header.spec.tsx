import { fireEvent, render as testingRender, RenderResult, act } from '@testing-library/react';

import { Header } from '.';
import { HeaderProps } from './types';

describe('<Header /> spec', () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      currentContest: 'Contest Name',
      currentCategory: 'Category Name',
      judge: 'Judge Name',
    };
  });

  const render = () => {
    return testingRender(<Header {...props} />);
  };

  it('Button should be visible', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('help-button');
    expect(button).toBeVisible();
  });

  it('Button text should be "Call help"', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('help-button');
    expect(button.textContent).toEqual('Call help');
  });

  it('Alert should be shown on button click', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('help-button');
    fireEvent.click(button);
    const alert = await findByTestId('alert');
    expect(alert).toBeVisible();
  });

  it('Alert text should be "Help request was sent!"', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('help-button');
    fireEvent.click(button);
    const alert = await findByTestId('alert');
    const text = alert.querySelector('.MuiAlert-message');
    expect(text?.textContent).toBe('Help request was sent!');
  });

  it('Contest should be equal to props.currentContest', async () => {
    const { findByTestId } = render();
    const contest = await findByTestId('current-contest');
    expect(contest.textContent).toBe(props.currentContest);
  });

  it('Category should be equal to props.currentCategory if present', async () => {
    const { findByTestId } = render();
    const category = await findByTestId('current-category');
    expect(category.textContent).toBe(props.currentCategory);
  });

  it('Category should be "No active category" if props not present', async () => {
    props = {
      currentContest: 'Contest Name',
      judge: 'Judge Name',
    };
    const { findByTestId } = render();
    const category = await findByTestId('current-category');
    expect(category.textContent).toBe('No active category');
  });

  it('Juadge should be greeted by name', async () => {
    const { findByTestId } = render();
    const judge = await findByTestId('judge');
    expect(judge.textContent).toBe(`Hi ${props.judge}!`);
  });
});
