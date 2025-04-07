/**
 * Componente Footer que renderiza un footer
 * con los componentes pasados como props.
 * 
 * @param {JSX.Element} children Elementos JSX que se van a renderizar
 * dentro del footer.
 * @returns {JSX.Element} Un JSX.Element que representa el footer.
 */
function Footer({ children }) {
    return (
        <footer>
            {children}
        </footer>
    )
}

export default Footer;
