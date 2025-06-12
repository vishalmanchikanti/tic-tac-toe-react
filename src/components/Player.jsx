import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  // used for changing the player name
  // we are using the initialName prop to set the default value of playerName
  const [playerName, setPlayerName] = useState(initialName);

  // used for Edit button functionality
  const [isEditing, setIsEditing] = useState(false);

  // on clicking edit button this function changes the default state value from false to true
  function handleEditClick() {
    setIsEditing((editing) => !editing); //best practice to use the previous state
    // setIsEditing(!isEditing); // this is also fine, but not the best practice
    if(isEditing){
    onChangeName(symbol, playerName);
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value) 
  }

  // if the player is not editing, we show the name as a span element
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // if the player is editing, we show the name as an input element
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }

  return (
    <li className = {isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
