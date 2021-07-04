import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function SideEffects({
  sideEffects,
  onUpdateSideEffects,
  onDeleteSideEffects,
}) {
  const [sideEffectsInput, setSideEffectsInput] = useState('');

  const handleChange = (event) => {
    setSideEffectsInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateSideEffects(sideEffectsInput.toUpperCase());
      setSideEffectsInput('');
    }

    if (event.key === 'Backspace' && sideEffectsInput.length === 0) {
      onDeleteSideEffects(sideEffects[sideEffectsInput.length - 1]);
    }
  };

  return (
    <div>
      <label htmlFor="sideEffects">Nebenwirkungen</label>
      <SideEffectsContainer>
        {sideEffects?.map((sideEffect, index) => (
          <Tag key={index + sideEffect}>
            {sideEffect}
            <span onClick={() => onDeleteSideEffects(sideEffects)}>
              &times;
            </span>
          </Tag>
        ))}
        <Input
          type="text"
          name="sideEffects"
          value={sideEffectsInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Write here"
        />
      </SideEffectsContainer>
    </div>
  );
}

SideEffects.propTypes = {
  headline: PropTypes.string,
  sideEffectgs: PropTypes.arrayOf(PropTypes.string),
  onUpdateSideEffects: PropTypes.func.isRequired,
  onDeleteSideEffects: PropTypes.func.isRequired,
};

const Input = styled.input`
  border: none;
  display: inline;
  margin: 0.3rem;
  padding: 0.5rem;
  width: 40%;
`;

const SideEffectsContainer = styled.div`
  background: white;
  border: 1px solid #999;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  padding: 0.4rem;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  margin: 0.2rem;
  background: #aeffd8;
  color: #183642;
  padding: 0.3rem;
  border-radius: 0.3rem;
  span {
    cursor: pointer;
    margin: 0rem 0.3rem;
  }
`;
