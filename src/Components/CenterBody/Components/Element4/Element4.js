import './Element4.css';

import CircleProfileBox4 from '../CircleProfileBox4/CircleProfileBox4';
import TitleBox from '../TitleBox/TitleBox';
import TextBox from '../TextBox/TextBox';
import TimeBox from '../TimeBox/TimeBox';

function Element4() {
    return (
    <nav className='box4'>
       <CircleProfileBox4/>
       <div>
       <TitleBox/>
       <TextBox/>
       <TimeBox/>
       </div>
     
    </nav>
    )
  }
  
  export default Element4;