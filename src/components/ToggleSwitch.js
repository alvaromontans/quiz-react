import { RxMoon, RxSun } from "react-icons/rx";
import { useDarkMode } from "../hooks/useDarkMode";

export default function ToggleSwitch() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    function handleOnClick() {
        toggleDarkMode((prevState) => !prevState);
    }

    return (
        <label className={`toggle-switch ${isDarkMode ? "off" : "on"}`}>
            <RxSun style={{ height: "20px", width: "20px" }} color="orange" onClick={handleOnClick} />
            <RxMoon style={{ height: "20px", width: "20px" }} color="yellow" onClick={handleOnClick} />
            <span className="slider">
                <input
                    id="checkbox"
                    type="checkbox"
                />
            </span>
        </label>
    );
}
