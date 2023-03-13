import './Element3.css';

import CircleProfileBox3 from '../CircleProfileBox3/CircleProfileBox3';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';

function Element3() {
    return (
    <nav className='box3'>
       <CircleProfileBox3/>
       <div>
       <TitleBox/>
       <TextBox/>
       <TimeBox/>
       </div>
     
    </nav>
    )
  }
  
  export default Element3;