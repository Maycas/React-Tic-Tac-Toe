import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditMode, toggleEditMode] = useState(false);

  function handleEditClick() {
    toggleEditMode((editing) => !editing); // toggleEditMode(!isEditMode) is not advised. Recommendation is to make sure we don't find unexpected rendering effects when updating a state based on a previous state value, because of React scheduling of React states
    if (isEditMode) onChangeName(symbol, playerName);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {isEditMode ? (
          <input
            type='text'
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span className='player-name'>{playerName}</span>
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditMode ? 'Save' : 'Edit'}</button>
    </li>
  );
}
