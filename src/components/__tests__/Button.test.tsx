import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import i18n from '../../i18n/config';
import { ThemeProvider } from '../../theme';

beforeEach(() => {
  i18n.init();
});

it('renders without crashing', () => {
  const handleClick = jest.fn();

  render(
    <ThemeProvider>
      <Button text="I'm Button" onClick={handleClick} />
    </ThemeProvider>
  );

  const button = screen.getByText("I'm Button");

  expect(button).toBeInTheDocument();

  button.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
  button.click();
  button.click();
  expect(handleClick).toHaveBeenCalledTimes(3);
});
