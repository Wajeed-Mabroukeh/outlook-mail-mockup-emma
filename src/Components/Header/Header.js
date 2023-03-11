import HigherPart from "./HigherPart/HigherPart";
import LowerPart from "./LowerPart/LowerPart";
import './Header.css'
function Header() {
    return (
      <header>
          <HigherPart />
          <LowerPart />
      </header>
    );
  }
  
  export default Header;