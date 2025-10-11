import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  render(<Dropdown ariaLabel="TestDropdown" />);
  expect(screen.getByRole('combobox', { name: /testdropdown/i })).toBeVisible();
});

test('Disabled dropdown changes background color', () => {
  render(<Dropdown ariaLabel="DisabledDropdown" disabled />);
  const el = screen.getByRole('combobox', { name: /disableddropdown/i });
  expect(el).toHaveAttribute('disabled');
  expect(el).toHaveStyle('background: #e5e7eb');
});
