
import './List_CenterBody.css';

import Elements1 from '../Elements/Elements.js';

import Areasnipping from '../Areasnipping/Areasnipping';
import Areasnipping2 from '../Areasnipping2/Areasnipping2'

import {Data} from "../Elements/Data"
import {Data2} from "../Elements/Data2"
import {Data3} from "../Elements/Data3"

function List_CenterBody() {
    return (
      <nav className='List_CenterBody'>
       {
                Data.map((item,index)=>(
            <Elements1 {...item} key= {index} />
        ))}
          <Areasnipping/>
              {
                Data2.map((item,index)=>(
            <Elements1 {...item} key= {index} />
        ))}
                  
                    <Areasnipping2/>
                  {
                Data3.map((item,index)=>(
            <Elements1 {...item} key= {index} />
        ))}
        
                  
      </nav>
    );
  }
  
  export default List_CenterBody;