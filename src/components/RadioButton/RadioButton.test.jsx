import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

test('Radio button is visible', () => {
  render(<RadioButton label="Pick me" name="x" value="y" />);
  expect(screen.getByLabelText(/pick me/i)).toBeVisible();
});

test('Disabled radio container background changes', () => {
  render(<RadioButton label="Disabled" name="x" value="y" disabled />);
  const container = screen.getByTestId('radio-container');
  expect(screen.getByLabelText(/disabled/i)).toBeDisabled();
  expect(container).toHaveStyle('background: #e5e7eb');
});
