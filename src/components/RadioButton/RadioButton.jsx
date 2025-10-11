import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  background: ${props => (props.$disabled ? '#e5e7eb' : '#ffffff')};
  color: ${props => (props.$disabled ? '#9ca3af' : '#111827')};
  border: 1px solid #e5e7eb;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
`;

const Input = styled.input`
  width: 18px;
  height: 18px;
  cursor: inherit;
`;

export default function RadioButton({
  label = 'Option',
  name = 'radio',
  value = 'value',
  checked = false,
  onChange,
  disabled = false
}) {
  const id = `${name}-${value}`;
  return (
    <Container $disabled={disabled} data-testid="radio-container" htmlFor={id}>
      <Input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span>{label}</span>
    </Container>
  );
}
