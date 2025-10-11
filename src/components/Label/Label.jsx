import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  font-weight: 600;
  color: ${props => (props.disabled ? '#9ca3af' : '#111827')};
  margin-bottom: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export default function Label({ text = 'Label', htmlFor, disabled = false }) {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
}
