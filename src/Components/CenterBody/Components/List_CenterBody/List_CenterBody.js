
import './List_CenterBody.css';
import Element1 from '../Element1/Element1';
import Element2 from '../Element2/Element2';
import Element3 from '../Element3/Element3';
import Element4 from '../Element4/Element4';
import Element5 from '../Element5/Element5';
import Element6 from '../Element6/Element6';

import Areasnipping from '../Areasnipping/Areasnipping';
import Areasnipping2 from '../Areasnipping2/Areasnipping2'

function List_CenterBody() {
    return (
      <nav className='List_CenterBody'>
            <Element1/>
            <Element2/>
            <Element3/>
            <Areasnipping/>
            <Element4/>
            <Areasnipping2/>
            <Element5/>
            <Element6/>  
      </nav>
    );
  }
  
  export default List_CenterBody;