import Header from "./Header.jsx";
import table from '../assets/table.jpg';

const RecipeHeader = ({ children }) => {
    return (
        <Header bg_color='orange' image={table}>{children}</Header>
    )
}

export default RecipeHeader;