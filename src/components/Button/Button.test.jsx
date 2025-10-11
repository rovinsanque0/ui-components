import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('Button is visible', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByRole('button', { name: /test button/i })).toBeVisible();
});

test('Disabled button changes background color', () => {
  render(<Button label="Disabled" disabled />);
  const btn = screen.getByRole('button', { name: /disabled/i });
  expect(btn).toHaveAttribute('disabled');
  expect(btn).toHaveStyle('background: #e5e7eb');
});
