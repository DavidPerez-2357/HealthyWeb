import vegetables from '../assets/vegetables.jpg'
import Header from "./Header.jsx";

const IndexHeader = ({ children }) => {
  return (
      <Header image={vegetables} bg_color='green'>{children}</Header>
  )
};

export default IndexHeader;