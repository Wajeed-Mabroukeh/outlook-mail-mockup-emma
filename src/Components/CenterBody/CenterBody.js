
import './CenterBody.css';
import Top_CenterBody from './Components/Top_CenterBody/Top_CenterBody';
import List_CenterBody from './Components/List_CenterBody/List_CenterBody';


function CenterBody() {
    return (
      <nav className='centerBody'>
     <Top_CenterBody/>
     <List_CenterBody/>
      </nav>
    );
  }
  
  export default CenterBody;