/**
 * Componente Main que renderiza el contenido principal de la aplicación.
 * 
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {JSX.Element} props.children - Elementos JSX que se van a renderizar
 * dentro del elemento principal.
 * @returns {JSX.Element} Un JSX.Element que representa el contenido principal.
 */
function Main({ children }) {
    return (
        <main className="main">
            {children}
        </main>
    )
}

export default Main;
