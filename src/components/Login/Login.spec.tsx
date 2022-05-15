import { fireEvent, render as testingRender, RenderResult, act } from '@testing-library/react';

import { Login } from '.';

describe('<Login /> spec', () => {
  let onLogin: jest.Mock;

  beforeEach(() => {
    onLogin = jest.fn();
  });

  const render = () => {
    return testingRender(<Login onLogin={onLogin} />);
  };

  it('Button text should be "Login"', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('submit-button');
    expect(button.innerHTML).toEqual('Login');
  });
});
