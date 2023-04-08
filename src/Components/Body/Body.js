
import LeftBody from '../LeftBody/LeftBody';
import CenterBody from '../CenterBody/CenterBody';
import RightBody from '../RightBody/RightBody';

// import "./Body.css"

function Body() {
    return (
      <div className='arr'>
      <LeftBody/>
      <CenterBody/>
      <RightBody/>
      </div>
    );
  }
  
  export default Body;