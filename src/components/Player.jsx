import { useState, useRef } from "react";
export default function Player() {

  const playerName = useRef();

  const [enterName, setEnterName] = useState(null);

  const handleClick = () =>{
    setEnterName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Bienvenido {enterName ?? 'Ingresa un Nombre'}!</h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        />
        <button onClick={handleClick}>Ingresar Nombre</button>
      </p>
    </section>
  );
};
