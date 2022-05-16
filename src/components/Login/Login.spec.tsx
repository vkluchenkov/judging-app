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

  it('Username value should equal input', async () => {
    const { findByTestId } = render();
    const muiInput = await findByTestId('username-input');
    const input = muiInput.querySelector('input');
    const value = 'someText123';

    fireEvent.change(input as Element, { target: { value } });

    expect(input!.value).toEqual(value);
  });

  it('Password value should equal input', async () => {
    const { findByTestId } = render();
    const muiInput = await findByTestId('password-input');
    const input = muiInput.querySelector('input');
    const value = 'someText123';

    fireEvent.change(input as Element, { target: { value } });

    expect(input!.value).toEqual(value);
  });

  it('onLogin should be called once on button click with correct values', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('submit-button');
    const usernameMuiInput = await findByTestId('username-input');
    const usernameInput = usernameMuiInput.querySelector('input');
    const passowrdMuiInput = await findByTestId('password-input');
    const passwordInput = passowrdMuiInput.querySelector('input');
    const value = 'correctValue';

    fireEvent.change(usernameInput as Element, { target: { value } });
    fireEvent.change(passwordInput as Element, { target: { value } });

    fireEvent.click(button);
    expect(onLogin).toBeCalledTimes(1);
    expect(onLogin).toBeCalledWith({ username: value, password: value });
  });

  it('onLogin should NOT be called and button should be disabled with incorrect values', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('submit-button');
    const usernameMuiInput = await findByTestId('username-input');
    const usernameInput = usernameMuiInput.querySelector('input');
    const passowrdMuiInput = await findByTestId('password-input');
    const passwordInput = passowrdMuiInput.querySelector('input');
    const value = 'a';

    fireEvent.change(usernameInput as Element, { target: { value } });
    fireEvent.change(passwordInput as Element, { target: { value } });

    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(onLogin).not.toBeCalled();
  });

  it('Button should be enabled with correct values', async () => {
    const { findByTestId } = render();
    const button = await findByTestId('submit-button');
    const usernameMuiInput = await findByTestId('username-input');
    const usernameInput = usernameMuiInput.querySelector('input');
    const passowrdMuiInput = await findByTestId('password-input');
    const passwordInput = passowrdMuiInput.querySelector('input');
    const value = 'correctValue123';

    fireEvent.change(usernameInput as Element, { target: { value } });
    fireEvent.change(passwordInput as Element, { target: { value } });

    expect(button).toBeEnabled();
  });
});
