import { useQuiz } from "../hooks/useQuiz";
import ToggleSwitch from "./ToggleSwitch";

function Header() {
  const { dispatch } = useQuiz();

  return (
    <header className='app-header' onClick={() => dispatch({ type: "restart" })}>
      <img src='logo512.png' alt='React logo' />
      <h1>Quiz React</h1>
      <ToggleSwitch />
    </header>
  );
}

export default Header;
