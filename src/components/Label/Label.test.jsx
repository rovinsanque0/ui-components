import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

test('Label is visible', () => {
  render(<Label text="Email" />);
  expect(screen.getByText(/email/i)).toBeVisible();
});

test('Disabled label color changes', () => {
  render(<Label text="Disabled Label" disabled />);
  const lbl = screen.getByText(/disabled label/i);
  expect(lbl).toHaveAttribute('disabled');
  expect(lbl).toHaveStyle('color: #9ca3af');
});
