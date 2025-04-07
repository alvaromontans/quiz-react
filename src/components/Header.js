import { useQuiz } from "../hooks/useQuiz";
import ToggleSwitch from "./ToggleSwitch";

function Header() {
  const { dispatch } = useQuiz();

  return (
    <header className='app-header'>
      <div className="header-title" onClick={() => dispatch({ type: "restart" })}>
        <img src='logo512.png' alt='React logo' />
        <h1>Quiz React</h1>
      </div>
      <ToggleSwitch />
    </header>
  );
}

export default Header;
