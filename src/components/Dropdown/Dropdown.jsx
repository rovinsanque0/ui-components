import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;

const StyledSelect = styled.select`
  appearance: none;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: ${props => (props.disabled ? '#e5e7eb' : '#ffffff')};
  color: ${props => (props.disabled ? '#9ca3af' : '#111827')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  min-width: 200px;

  &:focus {
    outline: 2px solid #2563eb33;
    outline-offset: 2px;
  }
`;

export default function Dropdown({
  ariaLabel = 'dropdown',
  options = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
    { value: 'three', label: 'Option Three' }
  ],
  value,
  onChange,
  disabled = false
}) {
  return (
    <Wrapper>
      <StyledSelect
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
}
