import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background: ${props => (props.disabled ? '#e5e7eb' : '#2563eb')};
  color: ${props => (props.disabled ? '#9ca3af' : '#ffffff')};
  font-weight: 600;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.1s ease, background 0.15s ease;

  &:hover {
    transform: ${props => (props.disabled ? 'none' : 'translateY(-2px)')};
    background: ${props => (props.disabled ? '#e5e7eb' : '#1d4ed8')};
  }

  @media (max-width: 640px) {
    padding: 10px 18px;
  }
`;

export default function Button({ label = 'Click Me', disabled = false, onClick }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
