import { useQuiz } from "../hooks/useQuiz";
import ToggleSwitch from "./ToggleSwitch";

/**
 * Componente Header que renderiza la cabecera de la aplicación.
 * Incluye el título de la aplicación y un interruptor para el modo oscuro.
 * 
 * @returns {JSX.Element} Un JSX.Element que representa la cabecera de la aplicación.
 */
function Header() {
  const { dispatch } = useQuiz();

  return (
    <header className='app-header'>
      <div className="header-title" onClick={() => dispatch({ type: "restart" })}>
        <img src='logo512.png' alt='Logo de React' />
        <h1>Quiz React</h1>
      </div>
      <ToggleSwitch />
    </header>
  );
}

export default Header;
